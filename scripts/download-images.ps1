$imageUrls = @{
    "solar-panels.jpg" = "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    "inverters.jpg" = "https://images.unsplash.com/photo-1623705563663-98e363e8ae51"
    "batteries.jpg" = "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d"
    "analog-camera.jpg" = "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb"
    "ptz-camera.jpg" = "https://images.unsplash.com/photo-1520697517317-6767553cc51f"
    "hd-camera.jpg" = "https://images.unsplash.com/photo-1551702516-9e0b991c67f4"
    "fire-detector.jpg" = "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f"
    "sliding-gate.jpg" = "https://images.unsplash.com/photo-1580741569354-e5f4486d5c80"
    "smart-home.jpg" = "https://images.unsplash.com/photo-1558002038-1055907df827"
}

$outputPath = "c:/Users/DELL/vscode_project/web_app_projects/BossND/web1/webb/public/services"

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputFile = Join-Path $outputPath $image.Key
    Invoke-WebRequest -Uri $image.Value -OutFile $outputFile
    Write-Host "Downloaded $($image.Key)"
}
