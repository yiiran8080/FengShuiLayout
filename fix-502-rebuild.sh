#!/bin/bash

# Fix 502 by rebuilding the Next.js application
echo "🔧 Fixing 502 Bad Gateway by rebuilding Next.js app..."

# SSH and rebuild
ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🛑 Stopping PM2..."
  pm2 stop all
  pm2 delete all
  
  echo "🗑️ Cleaning old build..."
  rm -rf .next
  rm -rf node_modules/.cache
  
  echo "📦 Installing/updating dependencies..."
  npm install
  
  echo "🔨 Building Next.js application..."
  npm run build
  
  echo "✅ Build completed! Checking .next directory..."
  ls -la .next/
  
  echo "🚀 Starting PM2 with fresh build..."
  pm2 start ecosystem.config.js
  pm2 save
  
  echo "📊 Final status:"
  pm2 status
  
  echo "🔍 Testing port 3000:"
  sleep 5
  curl -I http://localhost:3000 || echo "Port 3000 not responding yet, may need a moment"
  
  echo "📋 Recent logs:"
  pm2 logs --lines 10 --nostream
EOF

echo ""
echo "✅ Rebuild completed!"
echo "🌐 Your site should now be working at: https://www.harmoniqfengshui.com"
echo "🔧 If still having issues, check: http://54.205.0.111:3000"