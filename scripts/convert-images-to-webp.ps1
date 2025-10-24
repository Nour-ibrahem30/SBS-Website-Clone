# Convert images in the project to WebP using ImageMagick (magick)
# Usage: Open PowerShell in the repo root and run:
# .\scripts\convert-images-to-webp.ps1 -SourceDirs "src,assets" -Lossless:$false -Quality 80

param(
    [string]$SourceDirs = "src,assets",
    [bool]$Lossless = $false,
    [int]$Quality = 80,
    [switch]$PreviewOnly
)

$dirs = $SourceDirs -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }

function Check-Magick {
    try {
        magick -version > $null 2>&1
        return $true
    } catch {
        return $false
    }
}

if (-not (Check-Magick)) {
    Write-Host "ImageMagick 'magick' executable not found in PATH." -ForegroundColor Yellow
    Write-Host "Please install ImageMagick (https://imagemagick.org) and ensure 'magick' is on PATH." -ForegroundColor Yellow
    exit 1
}

$exts = @('*.png','*.jpg','*.jpeg')

foreach ($d in $dirs) {
    $abs = Join-Path -Path (Get-Location) -ChildPath $d
    if (-not (Test-Path $abs)) {
        Write-Host "Directory not found: $abs" -ForegroundColor DarkYellow
        continue
    }

    Write-Host "Scanning: $abs" -ForegroundColor Cyan
    foreach ($ext in $exts) {
        Get-ChildItem -Path $abs -Recurse -Include $ext -File | ForEach-Object {
            $src = $_.FullName
            $dest = [System.IO.Path]::ChangeExtension($src, '.webp')

            if (Test-Path $dest) {
                Write-Host "Skipped (exists): $dest" -ForegroundColor DarkGray
                return
            }

            $args = @($src)
            if ($Lossless) { $args += '-define'; $args += 'webp:lossless=true' }
            else { $args += '-quality'; $args += $Quality }
            $args += $dest

            if ($PreviewOnly) {
                Write-Host "Would run: magick $($args -join ' ')" -ForegroundColor Gray
            } else {
                Write-Host "Converting: $src  ->  $dest" -ForegroundColor Green
                magick @args
            }
        }
    }
}

Write-Host "Done. Review converted files and update your HTML/CSS to use .webp variants where appropriate." -ForegroundColor Cyan
