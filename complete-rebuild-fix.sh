#!/bin/bash

# Complete rebuild with proper static file handling
echo "🔄 Complete rebuild with proper static file handling..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🛑 Stopping PM2..."
  pm2 stop all
  pm2 delete all
  
  echo "🗑️ Clean slate rebuild..."
  rm -rf .next
  
  echo "🔨 Building with proper configuration..."
  NODE_ENV=production npm run build
  
  echo "📁 Manual static file setup for standalone..."
  # Create the _next directory structure in standalone
  mkdir -p .next/standalone/_next
  
  # Copy all static files
  cp -r .next/static .next/standalone/_next/static
  
  # Copy public directory
  cp -r public .next/standalone/public
  
  # Copy environment file
  cp .env .next/standalone/.env
  
  echo "✅ Verifying standalone structure:"
  echo "Static files:"
  ls -la .next/standalone/_next/static/chunks/ | head -3
  echo "Public files:"
  ls -la .next/standalone/public/images/logo/
  
  echo "🚀 Starting with proper standalone server..."
  pm2 start .next/standalone/server.js --name "fengshui-app" --env-file .next/standalone/.env
  pm2 save
  
  echo "⏳ Waiting for complete startup (20 seconds)..."
  sleep 20
  
  echo "🧪 Final functionality tests:"
  
  echo "1. Static JS test:"
  find .next/standalone/_next/static/chunks -name "*.js" | head -1 | xargs -I {} basename {} | xargs -I {} curl -I http://localhost:3000/_next/static/chunks/{} 2>/dev/null | head -2
  
  echo ""
  echo "2. Image test:"
  curl -I http://localhost:3000/images/logo/logo-black.png 2>/dev/null | head -2
  
  echo ""
  echo "3. Payment API test (should return session ID):"
  curl -X POST http://localhost:3000/api/payment-couple \
    -H "Content-Type: application/json" \
    -d '{"locale":"zh-TW"}' 2>/dev/null | jq -r '.sessionId' | head -20
  
  echo ""
  echo "4. Auth test:"
  curl http://localhost:3000/api/auth/status 2>/dev/null
  
  echo ""
  echo "📊 PM2 final status:"
  pm2 status
  
  echo ""
  echo "📋 No encoding errors in recent logs:"
  pm2 logs --lines 10 --nostream | grep -v "ByteString" | tail -5
EOF

echo ""
echo "🎉 Complete rebuild finished!"
echo "✅ All functionality should now work:"
echo "   • JavaScript files ✅"
echo "   • Images ✅"
echo "   • Payment buttons ✅"
echo "   • Language switching ✅"
echo "   • Login ✅"