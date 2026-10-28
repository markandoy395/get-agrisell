$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$assetDirectory = Join-Path $projectRoot 'public/assets'
$bitmap = New-Object System.Drawing.Bitmap 1200, 630
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$logo = [System.Drawing.Image]::FromFile((Join-Path $assetDirectory 'agrisell-logo.png'))
$resources = [System.Collections.Generic.List[System.IDisposable]]::new()

function New-Brush([string]$Color) {
    $brush = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($Color))
    $resources.Add($brush)
    return $brush
}

function New-Font([single]$Size, [System.Drawing.FontStyle]$Style) {
    $font = [System.Drawing.Font]::new('Segoe UI', $Size, $Style, [System.Drawing.GraphicsUnit]::Pixel)
    $resources.Add($font)
    return $font
}

try {
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#f6f9ef'))
    $green = New-Brush '#144b34'
    $muted = New-Brush '#486451'
    $white = New-Brush '#ffffff'
    $accent = New-Brush '#d8edb2'
    $graphics.FillRectangle($green, 0, 0, 1200, 12)
    $graphics.FillEllipse($accent, 1010, -115, 310, 310)
    $graphics.DrawImage($logo, 70, 62, 440, 100)
    $headline = New-Font 60 Bold
    $subtitle = New-Font 30 Regular
    $footer = New-Font 27 Bold
    $address = New-Font 21 Regular
    $graphics.DrawString('Local farms, buyers & riders.', $headline, $green, 65, 217)
    $graphics.DrawString('Connected in one app.', $headline, $green, 65, 293)
    $graphics.DrawString('Presell produce. Shop fresh. Deliver locally.', $subtitle, $muted, 70, 396)
    $graphics.FillRectangle($green, 0, 510, 1200, 120)
    $graphics.DrawString('Get AgriSell for Android', $footer, $white, 70, 550)
    $graphics.DrawString('markandoy395.github.io/get-agrisell', $address, $white, 710, 556)
    $bitmap.Save((Join-Path $assetDirectory 'og-image.png'), [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
    foreach ($resource in $resources) { $resource.Dispose() }
    $logo.Dispose()
    $graphics.Dispose()
    $bitmap.Dispose()
}
