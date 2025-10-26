# PowerShell Script untuk Replace Custom Classes dengan Tailwind Standar
# Jalankan dari direktori: C:\barbercho\project

Write-Host "🔧 Memulai replacement custom classes..." -ForegroundColor Green

$componentsPath = ".\src\components"

# Mapping custom classes ke Tailwind standar
$replacements = @{
    # Layout & Spacing
    'section-padding' = 'py-16 md:py-20 lg:py-24'
    'container-custom' = 'container mx-auto px-6 lg:px-8 max-w-7xl'
    
    # Colors - Primary (Orange)
    'bg-primary-50' = 'bg-orange-50'
    'bg-primary-100' = 'bg-orange-100'
    'bg-primary-200' = 'bg-orange-200'
    'bg-primary-500' = 'bg-orange-500'
    'bg-primary-600' = 'bg-orange-600'
    'text-primary-500' = 'text-orange-500'
    'text-primary-600' = 'text-orange-600'
    'text-primary-700' = 'text-orange-700'
    'border-primary-500' = 'border-orange-500'
    'border-primary-200' = 'border-orange-200'
    'hover:text-primary-600' = 'hover:text-orange-600'
    'hover:bg-primary-500' = 'hover:bg-orange-500'
    'hover:bg-primary-600' = 'hover:bg-orange-600'
    'hover:border-primary-500' = 'hover:border-orange-500'
    'focus:ring-primary-200' = 'focus:ring-orange-200'
    
    # Colors - Accent (Yellow)
    'bg-accent-100' = 'bg-yellow-100'
    'bg-accent-200' = 'bg-yellow-200'
    'bg-accent-500' = 'bg-yellow-500'
    'text-accent-500' = 'text-yellow-500'
    'text-accent-600' = 'text-yellow-600'
    'text-accent-700' = 'text-yellow-700'
    'border-accent-500' = 'border-yellow-500'
    'hover:text-accent-600' = 'hover:text-yellow-600'
    
    # Colors - Neutral (Gray)
    'bg-neutral-50' = 'bg-gray-50'
    'bg-neutral-100' = 'bg-gray-100'
    'bg-neutral-200' = 'bg-gray-200'
    'bg-neutral-300' = 'bg-gray-300'
    'text-neutral-500' = 'text-gray-500'
    'text-neutral-600' = 'text-gray-600'
    'text-neutral-700' = 'text-gray-700'
    'text-neutral-800' = 'text-gray-800'
    'text-neutral-900' = 'text-gray-900'
    'border-neutral-200' = 'border-gray-200'
    'border-neutral-300' = 'border-gray-300'
    
    # Buttons
    'btn-primary' = 'inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 hover:shadow-xl hover:scale-105 transition-all duration-300'
    'btn-secondary' = 'inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-100 hover:border-orange-500 hover:text-orange-500 transition-all duration-300'
    'btn-outline' = 'inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300'
    
    # Cards
    'card-elevated' = 'bg-white rounded-2xl shadow-lg border border-gray-200'
    'card-glass' = 'bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg'
    
    # Text & Typography
    'text-gradient' = 'bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent'
    'font-display' = 'font-bold'
    
    # Shadows
    'shadow-soft' = 'shadow-md'
    'shadow-medium' = 'shadow-lg'
    'shadow-large' = 'shadow-2xl'
    'shadow-glow' = 'shadow-xl hover:shadow-orange-500/20'
    
    # Animations (remove these)
    ' animate-on-scroll' = ''
    'animate-scale-in' = ''
    ' hover:shadow-glow' = ' hover:shadow-xl'
    'hover:-translate-y-2' = 'hover:-translate-y-1'
    
    # Border radius
    'rounded-4xl' = 'rounded-3xl'
    'rounded-5xl' = 'rounded-3xl'
}

# Get all .tsx files in components directory
$files = Get-ChildItem -Path $componentsPath -Filter "*.tsx" -Recurse

Write-Host "`n📁 Memproses $($files.Count) file..." -ForegroundColor Cyan

foreach ($file in $files) {
    Write-Host "`n  Processing: $($file.Name)" -ForegroundColor Yellow
    
    $content = Get-Content -Path $file.FullName -Raw
    $originalContent = $content
    
    # Replace each custom class
    foreach ($key in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
    }
    
    # Only write if content changed
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "    ✅ Updated!" -ForegroundColor Green
    } else {
        Write-Host "    ⏭️  No changes needed" -ForegroundColor Gray
    }
}

Write-Host "`n✨ Selesai! Semua custom classes telah diganti." -ForegroundColor Green
Write-Host "`n📝 Refresh browser Anda untuk melihat perubahan." -ForegroundColor Cyan
Write-Host "   URL: http://localhost:5174/`n" -ForegroundColor Cyan

