param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^\d+\.\d+\.\d+$')]
    [string]$Version,
    [Parameter(Mandatory = $true)]
    [ValidateRange(1, 2100000000)]
    [int]$BuildNumber,
    [string]$Notes = ''
)

$ErrorActionPreference = 'Stop'
$websiteDirectory = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $websiteDirectory 'public/release.json'
if ($Notes.Length -gt 2000) { throw 'Release notes must be 2000 characters or fewer.' }
if (Test-Path -LiteralPath $manifestPath) {
    $previous = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
    if ($BuildNumber -le $previous.buildNumber) {
        throw 'BuildNumber must be higher than the previous published release.'
    }
}

$apkPath = & (Join-Path $PSScriptRoot 'build_android_apk.ps1') -Version $Version -BuildNumber $BuildNumber
$downloadDirectory = Join-Path $websiteDirectory 'public/downloads'
New-Item -ItemType Directory -Path $downloadDirectory -Force | Out-Null
$filename = "agrisell-$Version-$BuildNumber.apk"
Copy-Item -LiteralPath $apkPath -Destination (Join-Path $downloadDirectory $filename) -Force
Copy-Item -LiteralPath $apkPath -Destination (Join-Path $downloadDirectory 'agrisell.apk') -Force
$manifest = [ordered]@{
    version = $Version
    buildNumber = $BuildNumber
    apkUrl = "downloads/$filename"
    notes = $Notes
} | ConvertTo-Json
[System.IO.File]::WriteAllText($manifestPath, $manifest + "`n", [System.Text.UTF8Encoding]::new($false))
Write-Output "Prepared AgriSell $Version ($BuildNumber). Run npm.cmd run build in get-agrisell and deploy dist/."
