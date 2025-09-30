#!/bin/bash

# Final fix - start the server properly
echo "🚀 Starting server with proper PM2 configuration..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🔧 Creating proper ecosystem config..."
  cat > ecosystem.config.js << 'ECOEOF'
module.exports = {
  apps: [{
    name: 'fengshui-app',
    script: '.next/standalone/server.js',
    cwd: '/home/ec2-user/fengshui-layout',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
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
  
  echo "🔗 Setting up environment..."
  # Copy environment file to standalone directory
  cp .env .next/standalone/.env
  
  echo "🚀 Starting PM2 with ecosystem config..."
  pm2 start ecosystem.config.js
  pm2 save
  
  echo "⏳ Waiting for startup (15 seconds)..."
  sleep 15
  
  echo "📊 PM2 Status:"
  pm2 status
  
  echo "🔍 Port check:"
  netstat -tulpn | grep :3000
  
  echo "🌐 Testing local connection:"
  curl -I http://localhost:3000 --connect-timeout 5 || echo "Connection timeout"
  
  echo "📋 Application logs:"
  pm2 logs --lines 10 --nostream
EOF

echo ""
echo "✅ Server should now be running!"
echo "🌐 Your site: https://www.harmoniqfengshui.com"
echo "🔧 Direct access: http://54.205.0.111:3000"