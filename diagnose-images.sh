#!/bin/bash

# Diagnose image loading issues
echo "🔍 Diagnosing image loading issues..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "📁 Checking public directory structure:"
  ls -la public/
  echo ""
  
  echo "🖼️ Checking images directory:"
  ls -la public/images/ | head -10
  echo ""
  
  echo "🏢 Checking logo directory:"
  ls -la public/images/logo/ 2>/dev/null || echo "Logo directory not found"
  echo ""
  
  echo "🎨 Checking hero directory:"
  ls -la public/images/hero/ 2>/dev/null || echo "Hero directory not found"
  echo ""
  
  echo "🔗 Checking standalone build public files:"
  ls -la .next/standalone/public/ 2>/dev/null || echo "No public in standalone"
  echo ""
  
  echo "📦 Checking if images are in standalone:"
  find .next/standalone -name "*.png" | head -5 2>/dev/null || echo "No PNG files in standalone"
  echo ""
  
  echo "🌐 Testing image access directly:"
  curl -I http://localhost:3000/images/logo/logo-black.png 2>/dev/null || echo "Image request failed"
  echo ""
  
  echo "📋 Recent image-related errors:"
  pm2 logs --lines 20 --nostream | grep -i image || echo "No recent image errors"
EOF