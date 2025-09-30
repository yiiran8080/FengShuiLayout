#!/bin/bash

# Fix encoding issues on EC2 server
echo "🔧 Fixing character encoding issues..."

# SSH to your server and run these commands:
echo "Run these commands on your EC2 server:"
echo ""
echo "1. Set proper locale:"
echo "sudo locale-gen zh_CN.UTF-8"
echo ""
echo "2. Update environment with UTF-8 support:"
echo "echo 'export LANG=zh_CN.UTF-8' >> ~/.bashrc"
echo "echo 'export LC_ALL=zh_CN.UTF-8' >> ~/.bashrc"
echo "source ~/.bashrc"
echo ""
echo "3. Restart PM2 with proper encoding:"
echo "pm2 stop all"
echo "pm2 delete all"
echo ""
echo "4. Set Node.js encoding environment variable:"
echo "export NODE_OPTIONS='--max-old-space-size=2048'"
echo "export LANG=zh_CN.UTF-8"
echo "export LC_ALL=zh_CN.UTF-8"
echo ""
echo "5. Start PM2 with encoding support:"
echo "pm2 start ecosystem.config.js"
echo "pm2 save"