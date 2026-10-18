param(
    [Parameter(Mandatory = $true)][string]$Version,
    [Parameter(Mandatory = $true)][int]$BuildNumber
)

$ErrorActionPreference = 'Stop'
$workspace = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$source = Join-Path $workspace 'agresellApp'
$staging = Join-Path $workspace '.agrisell-release'
New-Item -ItemType Directory -Path $staging -Force | Out-Null

# Isolate generated files from IDE runs. Exclude test-only native plugins in
# this release copy to avoid Flutter's dev-plugin registration mismatch.
foreach ($directory in @('lib', 'assets', 'android')) {
    & robocopy (Join-Path $source $directory) (Join-Path $staging $directory) /E /NFL /NDL /NJH /NJS /NP /XD build .gradle .kotlin .cxx /XF GeneratedPluginRegistrant.java | Out-Host
    if ($LASTEXITCODE -ge 8) { throw "Could not copy $directory for release." }
}
foreach ($filename in @('pubspec.lock', '.metadata')) {
    Copy-Item -LiteralPath (Join-Path $source $filename) -Destination $staging -Force
}
$pubspec = Get-Content -LiteralPath (Join-Path $source 'pubspec.yaml') -Raw
$pubspec = $pubspec -replace '(?m)^  integration_test:\r?\n    sdk: flutter\r?\n', ''
if ($pubspec -match '(?m)^  integration_test:') { throw 'Could not exclude integration_test in release copy.' }
[System.IO.File]::WriteAllText((Join-Path $staging 'pubspec.yaml'), $pubspec, [System.Text.UTF8Encoding]::new($false))

Push-Location -LiteralPath $staging
try {
    & flutter build apk --release "--build-name=$Version" "--build-number=$BuildNumber" | Out-Host
    if ($LASTEXITCODE -ne 0) { throw 'Isolated release APK build failed.' }
} finally {
    Pop-Location
}
Write-Output (Join-Path $staging 'build/app/outputs/flutter-apk/app-release.apk')
