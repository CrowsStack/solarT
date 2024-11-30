# Create the about directory if it doesn't exist
$aboutDir = "..\public\about"
if (!(Test-Path -Path $aboutDir)) {
    New-Item -ItemType Directory -Force -Path $aboutDir
}

# Define the image URLs and their target filenames
$images = @{
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"  # Solar panel installation
    "vision.jpg" = "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"   # Modern smart home
    "mission.jpg" = "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"  # Security camera
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $targetPath = Join-Path -Path $aboutDir -ChildPath $image.Key
    Write-Host "Downloading $($image.Value) to $targetPath"
    Invoke-WebRequest -Uri $image.Value -OutFile $targetPath
}

Write-Host "All images downloaded successfully!"
