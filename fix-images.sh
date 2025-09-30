#!/bin/bash

# Fix image loading by copying public directory to standalone build
echo "🔧 Fixing image loading for standalone build..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🛑 Stopping PM2..."
  pm2 stop all
  
  echo "📁 Copying public directory to standalone build..."
  cp -r public .next/standalone/
  
  echo "✅ Verifying public directory copied:"
  ls -la .next/standalone/public/images/ | head -5
  
  echo "🔗 Checking if logo files are accessible:"
  ls -la .next/standalone/public/images/logo/
  
  echo "🚀 Restarting PM2..."
  pm2 start all
  
  echo "⏳ Waiting for startup (10 seconds)..."
  sleep 10
  
  echo "🌐 Testing image access after fix:"
  curl -I http://localhost:3000/images/logo/logo-black.png 2>/dev/null | head -5
  
  echo ""
  echo "📊 PM2 Status:"
  pm2 status
  
  echo ""
  echo "📋 Recent logs:"
  pm2 logs --lines 10 --nostream
EOF

echo ""
echo "✅ Image fix completed!"
echo "🌐 Test your site now: https://www.harmoniqfengshui.com"