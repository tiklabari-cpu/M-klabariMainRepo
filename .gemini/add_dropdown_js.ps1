# Blog sayfalarına JavaScript ekleyen script
$blogPages = @(
    "deneme-bonusu",
    "ertesi-gun-bonusu",
    "free-spin-nedir",
    "bahsi-bozdur-cashout",
    "kombine-bahis",
    "hos-geldin-bonusu",
    "kayip-bonusu",
    "kripto-yatirim-bonusu",
    "freebet-nedir",
    "affiliate-linki-nedir",
    "iki-faktorlu-dogrulama"
)

$scriptTag = '    <script src="../blog-dropdown.js"></script>'

foreach ($page in $blogPages) {
    $filePath = "c:\Users\Hobbie\Desktop\miklabari\blog\$page\index.html"
    
    if (Test-Path $filePath) {
        Write-Host "Guncelleniyor: $page" -ForegroundColor Yellow
        
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # </footer> ile </body> arasina script ekle
        if ($content -notmatch 'blog-dropdown\.js') {
            $content = $content -replace '(</footer>\r?\n)', "`$1$scriptTag`r`n"
            
            [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
            Write-Host "Tamamlandi: $page" -ForegroundColor Green
        } else {
            Write-Host "Zaten var: $page" -ForegroundColor Cyan
        }
    } else {
        Write-Host "Bulunamadi: $page" -ForegroundColor Red
    }
}

Write-Host "`nTum blog sayfalarina JavaScript eklendi!" -ForegroundColor Green
