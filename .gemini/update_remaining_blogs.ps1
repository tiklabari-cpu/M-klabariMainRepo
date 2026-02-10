# Blog sayfalarını güncelleme scripti
$pages = @(
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

$headerOld = @'
            <li class="nav-item">
                <a href="#" class="nav-link">Bonuslar ▾</a>
                <div class="dropdown-content">
                    <a href="/blog/deneme-bonusu/">Deneme bonusu</a>
                    <a href="/blog/ertesi-gun-bonusu/">Ertesi gün bonusu</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Ne nedir ? ▾</a>
                <div class="dropdown-content">
                    <a href="/blog/free-spin-nedir/">Freespin nedir</a>
                    <a href="/blog/bahsi-bozdur-cashout/">Bahsi bozdur nedir</a>
                </div>
            </li>
'@

$headerNew = @'
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

$footerOld = @'
        <div class="footer-grid">
            <div class="footer-col">
                <div class="footer-title">Hızlı Menü</div>
                <ul>
                    <li><a href="/index.html">Ana Sayfa</a></li>
                    <li><a href="#">Bonuslar</a></li>
                    <li><a href="#">Popüler Oyunlar</a></li>
                    <li><a href="#">İletişim</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Rehber</div>
                <ul>
                    <li><a href="#">Bahis nedir ?</a></li>
                    <li><a href="/blog/bahsi-bozdur-cashout/">Cashout nedir ?</a></li>
                    <li><a href="/blog/free-spin-nedir/">Freespin nedir ?</a></li>
                    <li><a href="/blog/kombine-bahis/">Kombine bahis nedir ?</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Destek</div>
                <ul>
                    <li><a href="#">Sıkça Sorulan Sorular</a></li>
                    <li><a href="#">Kullanım Şartları</a></li>
                    <li><a href="#">Gizlilik Politikası</a></li>
                    <li><a href="#">Sorumlu Oyun</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <div class="footer-title">Diğer Linkler</div>
                <ul>
                    <li><a href="#">Casino Rehberi</a></li>
                    <li><a href="#">Slot Stratejileri</a></li>
                    <li><a href="#">Bonus Kuralları</a></li>
                    <li><a href="#">Canlı Destek</a></li>
                </ul>
            </div>
        </div>
'@

$footerNew = @'
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

foreach ($page in $pages) {
    $filePath = "c:\Users\Hobbie\Desktop\miklabari\blog\$page\index.html"
    
    if (Test-Path $filePath) {
        Write-Host "Güncelleniyor: $page" -ForegroundColor Yellow
        
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Header güncelle
        $content = $content.Replace($headerOld, $headerNew)
        
        # Footer güncelle
        $content = $content.Replace($footerOld, $footerNew)
        
        # Dosyayı kaydet
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        
        Write-Host "✓ Tamamlandı: $page" -ForegroundColor Green
    } else {
        Write-Host "✗ Bulunamadı: $page" -ForegroundColor Red
    }
}

Write-Host "`n✅ Tüm blog sayfaları güncellendi!" -ForegroundColor Cyan
