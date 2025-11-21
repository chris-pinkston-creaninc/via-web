# Deployment Script - Copy dist to deploy folder
# Run this after: npm run build

Write-Host "Preparing deployment folder..." -ForegroundColor Cyan

# Remove old deploy folder contents (keep folder structure)
if (Test-Path "deploy") {
    Remove-Item -Path "deploy\*" -Recurse -Force
    Write-Host "Cleaned deploy folder" -ForegroundColor Yellow
}

# Copy index.html and assets
Copy-Item -Path "dist\index.html" -Destination "deploy\index.html" -Force
Copy-Item -Path "dist\assets" -Destination "deploy\assets" -Recurse -Force

# Copy public assets (images, etc.)
Copy-Item -Path "public\*.png" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\*.jpg" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\*.webp" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\*.svg" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\*.gif" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\.htaccess" -Destination "deploy\" -Force -ErrorAction SilentlyContinue
Copy-Item -Path "public\_redirects" -Destination "deploy\" -Force -ErrorAction SilentlyContinue

# Copy images folder if it exists
if (Test-Path "public\images") {
    Copy-Item -Path "public\images" -Destination "deploy\images" -Recurse -Force
}

Write-Host "`n✅ Deployment folder ready!" -ForegroundColor Green
Write-Host "Deploy folder contains:" -ForegroundColor Cyan
Get-ChildItem -Path "deploy" -File | Select-Object Name | Format-Table -AutoSize

