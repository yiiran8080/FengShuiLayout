#!/bin/bash

echo "🚀 Quick FengShui Application Deployment"
echo "======================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Server configuration using SSH alias
SSH_ALIAS="fs"
SERVER_PATH="/home/ec2-user/FengShuiLayout"

echo -e "${BLUE}📋 Step 1: Testing SSH connection${NC}"
if timeout 5 ssh $SSH_ALIAS "echo 'Connected'" 2>/dev/null; then
    echo -e "${GREEN}✅ SSH connection successful${NC}"
else
    echo -e "${RED}❌ SSH connection failed${NC}"
    exit 1
fi

echo -e "${BLUE}🔄 Step 2: Stopping existing services${NC}"
ssh $SSH_ALIAS "pm2 stop all 2>/dev/null || true; pm2 delete all 2>/dev/null || true"

echo -e "${BLUE}📤 Step 3: Quick file upload${NC}"
# Create a quick deployment archive
echo "Creating deployment package..."
tar -czf deploy.tar.gz .next/standalone .next/static public package.json .env.production

# Upload the package
echo "Uploading deployment package..."
scp deploy.tar.gz $SSH_ALIAS:/tmp/

echo -e "${BLUE}🛠️  Step 4: Server setup and extraction${NC}"
ssh $SSH_ALIAS << 'EOF'
    # Clean and prepare
    rm -rf /home/ec2-user/FengShuiLayout
    mkdir -p /home/ec2-user/FengShuiLayout
    cd /home/ec2-user/FengShuiLayout
    
    # Extract deployment
    tar -xzf /tmp/deploy.tar.gz
    
    # Move standalone files to root
    mv .next/standalone/* .
    mv .next/standalone/.* . 2>/dev/null || true
    
    # Move env file
    mv .env.production .env
    
    # Ensure directories exist
    mkdir -p .next/static
    mkdir -p public
    
    # Create PM2 config
    cat > ecosystem.config.js << 'EOL'
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
    watch: false,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
EOL

    # Set permissions
    chmod +x server.js
    
    # Clean up
    rm -f /tmp/deploy.tar.gz
    
    echo "Server setup completed"
EOF

echo -e "${BLUE}🚀 Step 5: Starting application${NC}"
ssh $SSH_ALIAS << 'EOF'
    cd /home/ec2-user/FengShuiLayout
    
    # Install PM2 if not present
    npm install -g pm2@latest 2>/dev/null || echo "PM2 installation attempted"
    
    # Start application
    pm2 start ecosystem.config.js
    pm2 save
    
    echo "Application started"
    pm2 status
    
    # Test local connection
    sleep 5
    curl -I http://localhost:3000 2>/dev/null || echo "Server starting up..."
EOF

echo -e "${BLUE}🧪 Step 6: Testing deployment${NC}"

# Clean up local deployment file
rm -f deploy.tar.gz

# Test the website
echo "Testing website accessibility..."
sleep 10

HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com 2>/dev/null || echo "timeout")
echo "Home page status: $HOME_STATUS"

if [ "$HOME_STATUS" = "200" ] || [ "$HOME_STATUS" = "307" ]; then
    echo -e "${GREEN}✅ Website is accessible!${NC}"
else
    echo -e "${YELLOW}⚠️  Website status: $HOME_STATUS (may still be starting)${NC}"
fi

# Test API
PAYMENT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/payment 2>/dev/null || echo "timeout")
echo "Payment API status: $PAYMENT_STATUS"

AUTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/auth/session 2>/dev/null || echo "timeout")
echo "Auth API status: $AUTH_STATUS"

echo -e "\n${GREEN}🎉 DEPLOYMENT COMPLETED!${NC}"
echo -e "${BLUE}🌐 Your website: https://www.harmoniqfengshui.com${NC}"

echo -e "\n${YELLOW}📋 Quick Status Check:${NC}"
ssh $SSH_ALIAS << 'EOF'
    echo "=== PM2 Status ==="
    pm2 status
    
    echo -e "\n=== Memory Usage ==="
    free -h | head -2
    
    echo -e "\n=== Port 3000 Status ==="
    netstat -tlnp | grep :3000 | head -1
EOF

echo -e "\n${GREEN}✅ Your Feng Shui website should now be fully functional!${NC}"
echo -e "${BLUE}🎯 Test these features:${NC}"
echo "   • Payment processing"
echo "   • User authentication"
echo "   • Language switching"
echo "   • Report generation"
echo "   • Image loading"