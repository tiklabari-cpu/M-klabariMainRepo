const fs = require('fs');
const https = require('https');
const path = require('path');

const BASE_URL = 'https://img.haberkurt.com';
const LOCAL_IMG_DIR = 'img';
const DELAY_MS = 3000;

// Find all HTML files recursively
function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                getHtmlFiles(filePath, fileList);
            }
        } else if (filePath.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// Download image with delay
async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(dest);
        if (fs.existsSync(dir) && !fs.statSync(dir).isDirectory()) {
            fs.unlinkSync(dir);
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { }); // Delete the file if error
            reject(err);
        });
    });
}

async function run() {
    const rootDir = process.cwd();
    const htmlFiles = getHtmlFiles(rootDir);
    console.log(`Found ${htmlFiles.length} HTML files.`);

    const imageUrls = new Set();
    const urlToLocalPath = {};

    // Extract URLs
    htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const regex = new RegExp(`${BASE_URL}/[^"'\\s> ]+`, 'g');
        const matches = content.match(regex);
        if (matches) {
            matches.forEach(url => {
                // Remove cleanup if needed (e.g. trailing quotes)
                const cleanUrl = url.split(/[ "'\s>]/)[0];
                imageUrls.add(cleanUrl);
            });
        }
    });

    console.log(`Found ${imageUrls.size} unique images to download.`);

    const sortedUrls = Array.from(imageUrls);

    // Download images one by one with delay
    for (let i = 0; i < sortedUrls.length; i++) {
        const url = sortedUrls[i];
        const urlPath = url.replace(BASE_URL, '');
        const localPath = path.join(rootDir, LOCAL_IMG_DIR, urlPath);

        urlToLocalPath[url] = urlPath.startsWith('/') ? urlPath.substring(1) : urlPath;

        if (fs.existsSync(localPath)) {
            console.log(`[${i + 1}/${sortedUrls.length}] Already exists: ${urlPath}`);
            continue;
        }

        console.log(`[${i + 1}/${sortedUrls.length}] Downloading: ${url} ...`);
        try {
            await downloadImage(url, localPath);
            console.log(`Done. Waiting ${DELAY_MS / 1000}s...`);
            if (i < sortedUrls.length - 1) {
                await new Promise(resolve => setTimeout(resolve, DELAY_MS));
            }
        } catch (err) {
            console.error(`Failed to download ${url}: ${err.message}`);
        }
    }

    // Update HTML files
    console.log('Updating HTML files...');
    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let hasChanged = false;

        // Calculate relative path to the 'img' directory
        const fileDir = path.dirname(file);
        const relativeToRoot = path.relative(fileDir, rootDir);
        const imgPrefix = relativeToRoot ? path.join(relativeToRoot, LOCAL_IMG_DIR).replace(/\\/g, '/') : LOCAL_IMG_DIR;

        sortedUrls.forEach(url => {
            const localRelPath = `${imgPrefix}/${urlToLocalPath[url]}`;
            if (content.includes(url)) {
                content = content.split(url).join(localRelPath);
                hasChanged = true;
            }
        });

        if (hasChanged) {
            fs.writeFileSync(file, content);
            console.log(`Updated: ${path.relative(rootDir, file)}`);
        }
    });

    console.log('Migration complete!');
}

run();
