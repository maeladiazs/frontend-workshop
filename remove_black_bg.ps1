param(
    [string]$srcPath = "d:\PELATIHAN\WorkShop\frontend\src\assets\logo-m.jpg",
    [string]$dstPath = "d:\PELATIHAN\WorkShop\frontend\src\assets\logo-m-transparent.png",
    [string]$publicPath = "d:\PELATIHAN\WorkShop\frontend\public\logo-m-transparent.png"
)

Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Bitmap]::new($srcPath)
$rect = [System.Drawing.Rectangle]::new(0, 0, $img.Width, $img.Height)
$bmpData = $img.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$totalBytes = [Math]::Abs($bmpData.Stride) * $img.Height
$buffer = [byte[]]::new($totalBytes)
[System.Runtime.InteropServices.Marshal]::Copy($bmpData.Scan0, $buffer, 0, $totalBytes)

for ($y = 0; $y -lt $img.Height; $y++) {
    for ($x = 0; $x -lt $img.Width; $x++) {
        $idx = ($y * $bmpData.Stride) + ($x * 4)
        $b = [int]$buffer[$idx]
        $g = [int]$buffer[$idx + 1]
        $r = [int]$buffer[$idx + 2]

        $maxChannel = [Math]::Max($r, [Math]::Max($g, $b))

        if ($maxChannel -le 24) {
            $buffer[$idx + 3] = 0
        } elseif ($maxChannel -lt 64) {
            $factor = ($maxChannel - 24) / (64 - 24)
            $alpha = [byte][Math]::Round($factor * 255)
            $buffer[$idx + 3] = $alpha
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($buffer, 0, $bmpData.Scan0, $totalBytes)
$img.UnlockBits($bmpData)

$img.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Save($publicPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()

Write-Host "Logo transparent saved successfully!"
