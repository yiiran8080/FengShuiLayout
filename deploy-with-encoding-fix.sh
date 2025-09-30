#!/bin/bash

# Deploy with encoding fixes
set -e

# Find SSH key (you'll need to adjust this path)
SSH_KEY_PATHS=(
    "/Users/michaelng/Downloads/fengshui.pem"
    "/Users/michaelng/.ssh/fengshui.pem"
    "/Users/michaelng/Desktop/fengshui.pem"
)

SSH_KEY=""
for key_path in "${SSH_KEY_PATHS[@]}"; do
    if [ -f "$key_path" ]; then
        SSH_KEY="$key_path"
        break
    fi
done

if [ -z "$SSH_KEY" ]; then
    echo "❌ SSH key not found! Please provide the path:"
    read -p "SSH Key Path: " SSH_KEY
    if [ ! -f "$SSH_KEY" ]; then
        echo "❌ SSH key file not found: $SSH_KEY"
        exit 1
    fi
fi

echo "🔑 Using SSH key: $SSH_KEY"
echo "🚀 Deploying with encoding fixes..."

# Upload updated files
echo "📤 Uploading updated configuration..."
scp -i "$SSH_KEY" next.config.ts ec2-user@54.205.0.111:/home/ec2-user/fengshui-layout/

# Deploy with encoding fixes
ssh -i "$SSH_KEY" ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "🌍 Setting up UTF-8 locale support..."
  # Install Chinese locale support
  sudo yum update -y
  sudo yum install -y glibc-locale-source glibc-langpack-zh
  
  # Set UTF-8 environment
  export LANG=zh_CN.UTF-8
  export LC_ALL=zh_CN.UTF-8
  export NODE_OPTIONS="--max-old-space-size=2048"
  
  # Add to bashrc for persistence
  echo 'export LANG=zh_CN.UTF-8' >> ~/.bashrc
  echo 'export LC_ALL=zh_CN.UTF-8' >> ~/.bashrc
  echo 'export NODE_OPTIONS="--max-old-space-size=2048"' >> ~/.bashrc
  
  echo "🔨 Rebuilding application with encoding support..."
  npm run build
  
  echo "🛑 Stopping PM2..."
  pm2 stop all || true
  pm2 delete all || true
  
  echo "🚀 Starting with UTF-8 support..."
  # Update ecosystem config with encoding
  cat > ecosystem.config.js << 'ECOFILE'
module.exports = {
  apps: [{
    name: 'fengshui-app',
    script: 'npm',
    args: 'start',
    cwd: '/home/ec2-user/fengshui-layout',
    env_file: '.env',
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
      LANG: "zh_CN.UTF-8",
      LC_ALL: "zh_CN.UTF-8",
      NODE_OPTIONS: "--max-old-space-size=2048"
    }
  }]
};
ECOFILE
  
  pm2 start ecosystem.config.js
  pm2 save
  
  echo "✅ Deployment completed with encoding fixes!"
  echo "📊 PM2 Status:"
  pm2 status
  
  echo "📋 Checking for encoding errors..."
  pm2 logs fengshui-app --lines 10 --nostream
EOF

echo "✅ Deployment with encoding fixes completed!"
echo "🌐 Your app should now properly display Chinese characters at: https://www.harmoniqfengshui.com"