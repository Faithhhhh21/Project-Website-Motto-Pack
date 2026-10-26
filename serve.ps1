<#
.SYNOPSIS
    Motto Pack Indonesia - Local Web Server Runner (Zero Dependency)
    Runs directly on Windows PowerShell without needing Node.js or Python!
#>

$port = 8000
$url = "http://localhost:$port/"
$folder = $PSScriptRoot

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  PT MOTTO PACK INDONESIA - LOCAL WEB SERVER" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Root Directory : $folder" -ForegroundColor Yellow
Write-Host "Server URL     : $url" -ForegroundColor Green
Write-Host "Membuka browser otomatis..." -ForegroundColor Gray
Write-Host "Tekan CTRL + C di terminal ini untuk mematikan server." -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

# Open default browser
Start-Process $url

# Start HttpListener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    Write-Host "Gagal membuka port $port. Membuka index.html secara langsung..." -ForegroundColor Red
    Invoke-Item (Join-Path $folder "index.html")
    exit
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($localPath)) {
        $localPath = "index.html"
    }

    $filePath = Join-Path $folder $localPath

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = $mimeTypes[$ext]
        if (-not $contentType) {
            $contentType = "application/octet-stream"
        }

        $response.ContentType = $contentType
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
        $notFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.OutputStream.Write($notFoundMsg, 0, $notFoundMsg.Length)
    }

    $response.OutputStream.Close()
}
