# PowerShell script to update all blog page headers and footers

$blogPages = @(
    "c:\Users\Hobbie\Desktop\miklabari\blog\ertesi-gun-bonusu\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\free-spin-nedir\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\bahsi-bozdur-cashout\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\kombine-bahis\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\hos-geldin-bonusu\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\kayip-bonusu\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\kripto-yatirim-bonusu\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\freebet-nedir\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\affiliate-linki-nedir\index.html",
    "c:\Users\Hobbie\Desktop\miklabari\blog\iki-faktorlu-dogrulama\index.html"
)

$newHeaderDropdown = @'
            <li class="nav-item">
                <a href="#" class="nav-link">Bonuslar ▾</a>
                <div class="dropdown-content">
                    <a href="/blog/deneme-bonusu/">Deneme bonusu</a>
                    <a href="/blog/ertesi-gun-bonusu/">Ertesi gün bonusu</a>
                    <a href="/blog/hos-geldin-bonusu/">Hoş geldin bonusu</a>
                    <a href="/blog/kayip-bonusu/">Kayıp bonusu</a>
                    <a href="/blog/kripto-yatirim-bonusu/">Kripto yatırım bonusu</a>
                    <a href="/blog/freebet-nedir/">Freebet nedir</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Ne nedir ? ▾</a>
                <div class="dropdown-content">
                    <a href="/blog/free-spin-nedir/">Freespin nedir</a>
                    <a href="/blog/bahsi-bozdur-cashout/">Bahsi bozdur (Cashout) nedir</a>
                    <a href="/blog/kombine-bahis/">Kombine bahis nedir</a>
                    <a href="/blog/affiliate-linki-nedir/">Affiliate linki nedir</a>
                    <a href="/blog/iki-faktorlu-dogrulama/">İki faktörlü doğrulama nedir</a>
                </div>
            </li>
'@

$newFooter = @'
        <div class="footer-grid">
            <div class="footer-col">
                <div class="footer-title">Hızlı Menü</div>
                <ul>
                    <li><a href="/index.html">Ana Sayfa</a></li>
                    <li><a href="/blog/">Blog</a></li>
                    <li><a href="/blog/deneme-bonusu/">Deneme Bonusu</a></li>
                    <li><a href="/blog/ertesi-gun-bonusu/">Ertesi Gün Bonusu</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Bonus Rehberi</div>
                <ul>
                    <li><a href="/blog/hos-geldin-bonusu/">Hoş Geldin Bonusu</a></li>
                    <li><a href="/blog/kayip-bonusu/">Kayıp Bonusu</a></li>
                    <li><a href="/blog/kripto-yatirim-bonusu/">Kripto Yatırım Bonusu</a></li>
                    <li><a href="/blog/freebet-nedir/">Freebet Nedir</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Bilgi Merkezi</div>
                <ul>
                    <li><a href="/blog/free-spin-nedir/">Freespin Nedir</a></li>
                    <li><a href="/blog/bahsi-bozdur-cashout/">Bahsi Bozdur (Cashout)</a></li>
                    <li><a href="/blog/kombine-bahis/">Kombine Bahis</a></li>
                    <li><a href="/blog/affiliate-linki-nedir/">Affiliate Linki</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Güvenlik</div>
                <ul>
                    <li><a href="/blog/iki-faktorlu-dogrulama/">İki Faktörlü Doğrulama</a></li>
                    <li><a href="/index.html">Güvenilir Siteler</a></li>
                    <li><a href="/index.html">Lisanslı Platformlar</a></li>
                    <li><a href="/index.html">Sorumlu Oyun</a></li>
                </ul>
            </div>
        </div>
'@

Write-Host "Updating blog pages..." -ForegroundColor Green

foreach ($page in $blogPages) {
    if (Test-Path $page) {
        Write-Host "Processing: $page" -ForegroundColor Yellow
        
        $content = Get-Content $page -Raw -Encoding UTF8
        
        # Update header dropdowns - pattern matching for the nav section
        $content = $content -replace '(?s)(<li class="nav-item">.*?<a href="#" class="nav-link">Bonuslar ▾</a>.*?</li>\s*<li class="nav-item">.*?<a href="#" class="nav-link">Ne nedir \? ▾</a>.*?</li>)', $newHeaderDropdown
        
        # Update footer - pattern matching for footer-grid
        $content = $content -replace '(?s)(<div class="footer-grid">.*?</div>\s*</div>)(?=\s*<div\s+style="text-align: center)', ($newFooter + "`r`n        </div>")
        
        Set-Content -Path $page -Value $content -Encoding UTF8 -NoNewline
        Write-Host "✓ Updated: $page" -ForegroundColor Green
    } else {
        Write-Host "✗ Not found: $page" -ForegroundColor Red
    }
}

Write-Host "`nAll blog pages updated successfully!" -ForegroundColor Cyan
