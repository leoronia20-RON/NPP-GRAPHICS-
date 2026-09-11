# Simple PowerShell helper: runs Python HTTP server and opens the browser
param(
  [int]$Port = 5500
)
$pw = Get-Location
Write-Host "Starting HTTP server at http://localhost:$Port serving $pw"
Start-Process "powershell" -ArgumentList "-NoExit","-Command","python -m http.server $Port"
Start-Sleep -Milliseconds 600
Start-Process "http://localhost:$Port/index.html"
