Param(
  [Parameter(Mandatory=$true)][string]$InputDir,
  [string]$OutputJson = "cdn_mapping.json"
)

if (-not (Test-Path $InputDir)) {
  Write-Error "InputDir not found: $InputDir"; exit 1
}

$ApiKey = $env:IMGBB_API_KEY
if (-not $ApiKey) {
  Write-Error "Please set IMGBB_API_KEY environment variable with your ImgBB API key"; exit 1
}

$files = Get-ChildItem -Path $InputDir -File -Include *.png,*.jpg,*.jpeg,*.gif,*.webp
if ($files.Count -eq 0) { Write-Error "No images found in $InputDir"; exit 1 }

$mapping = @{}

foreach ($f in $files) {
  try {
    Write-Host "Uploading $($f.Name)..."
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $b64 = [System.Convert]::ToBase64String($bytes)
    $body = @{ key = $ApiKey; image = $b64; name = $f.BaseName } 
    $resp = Invoke-RestMethod -Method Post -Uri "https://api.imgbb.com/1/upload" -Body $body
    if ($resp.success -and $resp.data) {
      $direct = $resp.data.image.url
      if (-not $direct) { $direct = $resp.data.display_url }
      if (-not $direct) { $direct = $resp.data.url }
      if ($direct) {
        $rel = (Resolve-Path -LiteralPath $f.FullName).Path | Split-Path -NoQualifier
        $rel = $rel.Replace("\\","/")
        # store mapping relative to repo root, e.g., src/filename.webp
        $root = Resolve-Path .
        $relPath = [System.IO.Path]::GetRelativePath($root.Path, $f.FullName).Replace("\\","/")
        $mapping[$relPath] = $direct
      }
    } else {
      Write-Warning "Upload failed for $($f.Name)"
    }
  } catch {
    Write-Warning "Error uploading $($f.Name): $($_.Exception.Message)"
  }
}

$json = ($mapping | ConvertTo-Json -Depth 3)
Set-Content -Path $OutputJson -Value $json -Encoding UTF8
Write-Host "Written mapping to $OutputJson"