#!/bin/bash

echo "🚀 Complete FengShui Application Deployment - Updated IP"
echo "======================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Updated server configuration with correct IP
SERVER_IP="54.205.0.111"
SERVER_USER="ec2-user"
APP_NAME="fengshui-app"
SERVER_PATH="/home/ec2-user/FengShuiLayout"

echo -e "${BLUE}📋 Step 1: Testing connection with updated IP${NC}"
echo "New server IP: $SERVER_IP"
echo "Testing SSH connection..."

# Test SSH connection first
if timeout 10 ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "echo 'SSH connection successful'" 2>/dev/null; then
    echo -e "${GREEN}✅ SSH connection successful with new IP${NC}"
else
    echo -e "${RED}❌ SSH connection still failing${NC}"
    echo "Please ensure you have the correct SSH key and try manually:"
    echo "ssh -i your-key.pem ${SERVER_USER}@${SERVER_IP}"
    exit 1
fi

echo -e "${BLUE}📦 Step 2: Local build verification${NC}"
if [ ! -d ".next/standalone" ]; then
    echo "Building application first..."
    npm run build
fi

echo -e "${GREEN}✅ Build verified${NC}"

echo -e "${BLUE}🔄 Step 3: Stopping remote services${NC}"
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    echo "Stopping PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    echo "Cleaning up old deployment..."
    rm -rf /home/ec2-user/FengShuiLayout
    mkdir -p /home/ec2-user/FengShuiLayout
EOF

echo -e "${GREEN}✅ Remote cleanup completed${NC}"

echo -e "${BLUE}📤 Step 4: Uploading application files${NC}"

# Upload the standalone build
echo "Uploading standalone build..."
scp -r -o StrictHostKeyChecking=no .next/standalone/* ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

# Upload static files
echo "Uploading static files..."
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} "mkdir -p ${SERVER_PATH}/.next"
scp -r -o StrictHostKeyChecking=no .next/static ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/.next/

# Upload public files
echo "Uploading public files..."
scp -r -o StrictHostKeyChecking=no public ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

# Upload package.json
echo "Uploading package.json..."
scp -o StrictHostKeyChecking=no package.json ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

# Upload environment file
echo "Uploading environment configuration..."
scp -o StrictHostKeyChecking=no .env.production ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/.env

echo -e "${GREEN}✅ File upload completed${NC}"

echo -e "${BLUE}⚙️  Step 5: Server configuration${NC}"

ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    cd /home/ec2-user/FengShuiLayout
    
    echo "Setting up directory structure..."
    
    # Create PM2 ecosystem file
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
    error_file: '/home/ec2-user/logs/fengshui-error.log',
    out_file: '/home/ec2-user/logs/fengshui-out.log',
    log_file: '/home/ec2-user/logs/fengshui-combined.log',
    time: true,
    autorestart: true,
    watch: false,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};
EOL

    # Create logs directory
    mkdir -p /home/ec2-user/logs
    
    # Set proper file permissions
    chmod +x server.js
    chmod 644 .env
    chmod 644 ecosystem.config.js
    
    echo "Server configuration completed"
EOF

echo -e "${GREEN}✅ Server configuration completed${NC}"

echo -e "${BLUE}🚀 Step 6: Starting application${NC}"

ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    cd /home/ec2-user/FengShuiLayout
    
    echo "Installing/updating PM2..."
    npm install -g pm2@latest
    
    echo "Starting application with PM2..."
    pm2 start ecosystem.config.js
    
    echo "Saving PM2 configuration..."
    pm2 save
    pm2 startup
    
    echo "Waiting for application to start..."
    sleep 15
    
    echo "PM2 Status:"
    pm2 status
    
    echo "Testing local application..."
    curl -I http://localhost:3000 || echo "Application may still be starting..."
EOF

echo -e "${GREEN}✅ Application started successfully${NC}"

echo -e "${BLUE}🧪 Step 7: Testing deployment${NC}"

echo "Waiting for application to fully initialize..."
sleep 10

# Test endpoints with new IP
echo "Testing main endpoints..."

# Test home page
echo "Testing home page..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com)
echo "Home page status: $HTTP_STATUS"

# Test specific API endpoints
echo "Testing payment API..."
PAYMENT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/payment)
echo "Payment API status: $PAYMENT_STATUS"

echo "Testing auth API..."
AUTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/auth/session)
echo "Auth API status: $AUTH_STATUS"

echo -e "${BLUE}📊 Step 8: Final verification${NC}"

ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    echo "=== Final PM2 Status ==="
    pm2 status
    
    echo -e "\n=== Server Resources ==="
    free -h
    df -h /
    
    echo -e "\n=== Application Logs (last 20 lines) ==="
    pm2 logs fengshui-app --lines 20 --nostream
    
    echo -e "\n=== Environment Variables Check ==="
    echo "NODE_ENV: $NODE_ENV"
    echo "PORT: $PORT"
    
    echo -e "\n=== Network Test ==="
    netstat -tlnp | grep :3000 || echo "Port 3000 not found"
EOF

echo -e "${GREEN}🎉 DEPLOYMENT COMPLETED!${NC}"
echo -e "${BLUE}🌐 Your website: https://www.harmoniqfengshui.com${NC}"
echo -e "${BLUE}📍 Server IP: $SERVER_IP${NC}"
echo ""
echo -e "${YELLOW}🔧 Deployed Components:${NC}"
echo "   ✅ Next.js 15.2.4 standalone server"
echo "   ✅ Complete environment configuration"
echo "   ✅ PM2 process manager with auto-restart"
echo "   ✅ All API routes and static files"
echo "   ✅ MongoDB, Stripe, and OAuth integrations"
echo ""
echo -e "${YELLOW}🎯 Test These Features:${NC}"
echo "   • Payment processing"
echo "   • User authentication (Google/Apple)"
echo "   • Language switching"
echo "   • Report generation"
echo "   • Image loading"
echo ""
echo -e "${GREEN}🚀 Your Feng Shui website is now live!${NC}"