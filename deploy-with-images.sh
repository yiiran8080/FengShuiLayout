#!/bin/bash

# Updated deployment script that includes image fix
set -e

EC2_HOST="54.205.0.111"
EC2_USER="ec2-user"
SSH_KEY="~/.ssh/fengshui.pem"
APP_NAME="fengshui-layout"

echo "🚀 Deploying with automatic image fix..."

# Upload project files
echo "📤 Uploading project files..."
rsync -avz -e "ssh -i $SSH_KEY" \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude '*.log' \
  ./ "$EC2_USER@$EC2_HOST:/home/ec2-user/$APP_NAME/"

# Build and deploy with image fix
ssh -i "$SSH_KEY" "$EC2_USER@$EC2_HOST" << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🛑 Stopping PM2..."
  pm2 stop all || true
  
  echo "📦 Installing dependencies..."
  npm install
  
  echo "🔨 Building application..."
  npm run build
  
  echo "🖼️ Copying public directory for standalone build..."
  cp -r public .next/standalone/
  cp .env .next/standalone/.env
  
  echo "✅ Verifying image files are accessible:"
  ls -la .next/standalone/public/images/logo/ | head -3
  
  echo "🚀 Starting PM2..."
  pm2 start ecosystem.config.js
  pm2 save
  
  echo "📊 Deployment completed!"
  pm2 status
EOF

echo "✅ Deployment with image fix completed!"
echo "🌐 Your site: https://www.harmoniqfengshui.com"