#!/bin/bash

# Quick server diagnosis script
echo "🔍 Diagnosing 502 Bad Gateway issue..."

# Find SSH key
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
fi

echo "🔑 Using SSH key: $SSH_KEY"

# SSH and diagnose
ssh -i "$SSH_KEY" ec2-user@54.205.0.111 << 'EOF'
  echo "=== Server Diagnosis Report ==="
  echo ""
  
  echo "📊 PM2 Status:"
  pm2 status
  echo ""
  
  echo "📋 PM2 Logs (last 20 lines):"
  pm2 logs --lines 20 --nostream
  echo ""
  
  echo "🔌 Port 3000 Status:"
  sudo netstat -tulpn | grep :3000 || echo "No process listening on port 3000"
  echo ""
  
  echo "💾 Memory Usage:"
  free -h
  echo ""
  
  echo "⚡ CPU Usage:"
  top -bn1 | head -5
  echo ""
  
  echo "🌐 Process Details:"
  ps aux | grep -E "(node|npm)" | grep -v grep
  echo ""
  
  echo "📁 App Directory:"
  cd /home/ec2-user/fengshui-layout
  ls -la | head -10
  echo ""
  
  echo "🔧 Environment Check (first 10 vars):"
  head -10 .env || echo "No .env file found"
  echo ""
  
  echo "🚀 Quick Fix Attempt - Restarting PM2:"
  pm2 restart all
  sleep 3
  pm2 status
EOF