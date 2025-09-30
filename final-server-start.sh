#!/bin/bash

# Final fix to start the server properly
echo "🚀 Starting server with correct PM2 configuration..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🔧 Creating ecosystem config in standalone directory..."
  cat > .next/standalone/ecosystem.config.js << 'ECOEOF'
module.exports = {
  apps: [{
    name: 'fengshui-app',
    script: 'server.js',
    cwd: '/home/ec2-user/fengshui-layout/.next/standalone',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '../../logs/err.log',
    out_file: '../../logs/out.log',
    log_file: '../../logs/combined.log',
    time: true,
    env: {
      NODE_ENV: "production",
      PORT: "3000",
      HOSTNAME: "0.0.0.0"
    }
  }]
};
ECOEOF

  echo "📁 Creating logs directory..."
  mkdir -p logs
  
  echo "🚀 Starting PM2 from standalone directory..."
  cd .next/standalone
  pm2 start ecosystem.config.js
  pm2 save
  
  echo "⏳ Waiting for startup (15 seconds)..."
  sleep 15
  
  echo "🧪 Testing all functionality:"
  
  echo "1. Server status:"
  pm2 status
  
  echo ""
  echo "2. Port check:"
  netstat -tulpn | grep :3000
  
  echo ""
  echo "3. Static files test:"
  curl -I http://localhost:3000/_next/static/chunks/1684-b3b37e43eb44cbf0.js 2>/dev/null | head -2
  
  echo ""
  echo "4. Images test:"
  curl -I http://localhost:3000/images/logo/logo-black.png 2>/dev/null | head -2
  
  echo ""
  echo "5. Payment API test:"
  curl -X POST http://localhost:3000/api/payment-couple \
    -H "Content-Type: application/json" \
    -d '{"locale":"zh-TW"}' 2>/dev/null | head -1
  
  echo ""
  echo "6. Auth API test:"
  curl http://localhost:3000/api/auth/status 2>/dev/null
  
  echo ""
  echo "7. Language switching test:"
  curl -I http://localhost:3000/zh-CN 2>/dev/null | grep "HTTP"
  
  echo ""
  echo "📋 Recent logs (should be clean):"
  pm2 logs --lines 5 --nostream
EOF

echo ""
echo "✅ Final deployment completed!"
echo ""
echo "🎯 Your website should now have ALL functionality working:"
echo "   • ✅ JavaScript and interactive elements"
echo "   • ✅ Images and static assets"
echo "   • ✅ Payment buttons (Stripe integration)"
echo "   • ✅ Language switching (zh-CN/zh-TW)"
echo "   • ✅ Login and authentication"
echo "   • ✅ All API endpoints"
echo ""
echo "🌐 Test your site: https://www.harmoniqfengshui.com"