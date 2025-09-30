#!/bin/bash

echo "🔍 AWS EC2 Server Diagnosis and Manual Deployment Guide"
echo "====================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

SERVER_IP="13.213.75.92"
SERVER_USER="ec2-user"

echo -e "${BLUE}📋 Step 1: Testing server connectivity${NC}"

echo "Testing ping to server..."
if ping -c 3 $SERVER_IP > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Server is reachable via ping${NC}"
else
    echo -e "${RED}❌ Server is not reachable via ping${NC}"
    echo -e "${YELLOW}⚠️  This could indicate:${NC}"
    echo "   - EC2 instance is stopped"
    echo "   - Security group blocks ICMP"
    echo "   - Network connectivity issues"
fi

echo -e "\n${BLUE}📋 Step 2: Testing SSH connectivity${NC}"

echo "Testing SSH connection with timeout..."
timeout 10 ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "echo 'SSH connection successful'" 2>/dev/null

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SSH connection successful${NC}"
else
    echo -e "${RED}❌ SSH connection failed${NC}"
    echo -e "${YELLOW}⚠️  Possible issues:${NC}"
    echo "   - EC2 instance is stopped/terminated"
    echo "   - Security group doesn't allow SSH (port 22)"
    echo "   - SSH key is missing or incorrect"
    echo "   - Instance IP has changed"
fi

echo -e "\n${BLUE}📋 Step 3: Manual deployment steps${NC}"
echo "If SSH is not working, here's what you need to do:"
echo ""
echo -e "${YELLOW}🔧 AWS Console Steps:${NC}"
echo "1. Go to AWS EC2 Console: https://console.aws.amazon.com/ec2/"
echo "2. Check if your instance is running:"
echo "   - Instance ID should show 'running' status"
echo "   - If stopped, click 'Start instance'"
echo "3. Verify Security Group allows SSH:"
echo "   - Inbound rules should include: SSH (22) from 0.0.0.0/0"
echo "   - Also ensure HTTP (80) and HTTPS (443) are allowed"
echo "4. Check the Public IP address (it may have changed)"

echo -e "\n${YELLOW}🔑 SSH Key Verification:${NC}"
echo "1. Ensure you have the correct .pem file"
echo "2. Set proper permissions: chmod 400 your-key.pem"
echo "3. Test connection: ssh -i your-key.pem ec2-user@$SERVER_IP"

echo -e "\n${YELLOW}📦 Alternative Deployment Methods:${NC}"
echo "If SSH still doesn't work, you can:"
echo "1. Use AWS Systems Manager Session Manager (no SSH required)"
echo "2. Use EC2 Instance Connect from AWS Console"
echo "3. Create a new EC2 instance with proper security groups"

echo -e "\n${BLUE}📁 Local build is ready for deployment:${NC}"
echo "Your application has been built successfully and is ready to deploy:"
echo -e "${GREEN}✅ .next/standalone/ - Contains the server build${NC}"
echo -e "${GREEN}✅ .next/static/ - Contains static assets${NC}"
echo -e "${GREEN}✅ public/ - Contains public files${NC}"
echo -e "${GREEN}✅ .env.production - Contains environment variables${NC}"

echo -e "\n${BLUE}🚀 Once you can connect to your server, run these commands:${NC}"
cat << 'EOL'

# 1. Clean up old deployment
rm -rf /home/ec2-user/FengShuiLayout
mkdir -p /home/ec2-user/FengShuiLayout
cd /home/ec2-user/FengShuiLayout

# 2. Upload files (you'll need to do this manually)
# - Copy all files from .next/standalone/ to server root
# - Copy .next/static/ to .next/static/
# - Copy public/ directory
# - Copy .env.production as .env

# 3. Create PM2 config
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'fengshui-app',
    script: './server.js',
    cwd: '/home/ec2-user/FengShuiLayout',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_file: '/home/ec2-user/FengShuiLayout/.env',
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '500M',
    autorestart: true,
    watch: false
  }]
};
EOF

# 4. Install PM2 and start app
npm install -g pm2@latest
pm2 start ecosystem.config.js
pm2 save
pm2 startup

EOL

echo -e "\n${YELLOW}🔄 Quick Fix Commands:${NC}"
echo "If you can connect to the server, try these commands first:"
echo ""
echo "# Check if the app is still running"
echo "pm2 status"
echo ""
echo "# Restart the app"
echo "pm2 restart all"
echo ""
echo "# Check logs for errors"
echo "pm2 logs"

echo -e "\n${BLUE}📞 Need immediate help?${NC}"
echo "1. Check AWS EC2 Console for instance status"
echo "2. Verify security groups allow SSH access"
echo "3. Try connecting via AWS Systems Manager Session Manager"
echo "4. If all else fails, we can create a new EC2 instance"

echo -e "\n${GREEN}💡 Your build is ready - we just need to get it to the server!${NC}"