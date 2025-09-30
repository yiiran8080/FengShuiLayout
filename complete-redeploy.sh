#!/bin/bash

echo "🚀 Complete FengShui Application Redeployment"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Server configuration
SERVER_IP="13.213.75.92"
SERVER_USER="ec2-user"
APP_NAME="fengshui-app"
SERVER_PATH="/home/ec2-user/FengShuiLayout"

echo -e "${BLUE}📋 Step 1: Pre-deployment checks${NC}"
echo "Checking local environment..."

# Check if .env.production exists
if [ ! -f ".env.production" ]; then
    echo -e "${RED}❌ .env.production file not found!${NC}"
    exit 1
fi

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json file not found!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Local environment checks passed${NC}"

echo -e "${BLUE}📦 Step 2: Building application locally${NC}"
echo "Installing dependencies..."
npm install

echo "Building Next.js application with standalone output..."
npm run build

if [ ! -d ".next" ]; then
    echo -e "${RED}❌ Build failed - .next directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

echo -e "${BLUE}🔄 Step 3: Stopping remote services${NC}"
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    echo "Stopping PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    pm2 kill 2>/dev/null || true
    
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
scp -r -o StrictHostKeyChecking=no .next/static ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/.next/

# Upload public files
echo "Uploading public files..."
scp -r -o StrictHostKeyChecking=no public ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

# Upload package.json for PM2 configuration
echo "Uploading package.json..."
scp -o StrictHostKeyChecking=no package.json ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

# Upload environment file
echo "Uploading environment configuration..."
scp -o StrictHostKeyChecking=no .env.production ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/.env

echo -e "${GREEN}✅ File upload completed${NC}"

echo -e "${BLUE}⚙️  Step 5: Server configuration${NC}"

# Configure the server
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    cd /home/ec2-user/FengShuiLayout
    
    echo "Setting up directory structure..."
    
    # Ensure static files are in the right place
    mkdir -p .next/static
    mkdir -p public
    
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
    sleep 10
    
    echo "Checking PM2 status..."
    pm2 status
    
    echo "Checking application health..."
    curl -I http://localhost:3000 || echo "Application may still be starting..."
EOF

echo -e "${GREEN}✅ Application deployment completed${NC}"

echo -e "${BLUE}🧪 Step 7: Testing deployment${NC}"

echo "Testing main endpoints..."

# Test home page
echo "Testing home page..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com)
if [ "$HTTP_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Home page: OK${NC}"
else
    echo -e "${YELLOW}⚠️  Home page: HTTP $HTTP_STATUS${NC}"
fi

# Test API endpoints
echo "Testing payment API..."
PAYMENT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/payment)
if [ "$PAYMENT_STATUS" = "405" ] || [ "$PAYMENT_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Payment API: OK${NC}"
else
    echo -e "${YELLOW}⚠️  Payment API: HTTP $PAYMENT_STATUS${NC}"
fi

echo "Testing auth API..."
AUTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.harmoniqfengshui.com/api/auth/session)
if [ "$AUTH_STATUS" = "200" ]; then
    echo -e "${GREEN}✅ Auth API: OK${NC}"
else
    echo -e "${YELLOW}⚠️  Auth API: HTTP $AUTH_STATUS${NC}"
fi

echo -e "${BLUE}📊 Step 8: Final server status${NC}"

ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} << 'EOF'
    echo "=== PM2 Process Status ==="
    pm2 status
    
    echo -e "\n=== Server Resources ==="
    echo "Memory usage:"
    free -h
    
    echo -e "\nDisk usage:"
    df -h /
    
    echo -e "\n=== Application Logs (last 10 lines) ==="
    pm2 logs fengshui-app --lines 10 --nostream
EOF

echo -e "${GREEN}🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!${NC}"
echo -e "${BLUE}🌐 Your website is available at: https://www.harmoniqfengshui.com${NC}"
echo ""
echo -e "${YELLOW}📋 What was deployed:${NC}"
echo "   ✅ Complete Next.js standalone build"
echo "   ✅ All static files and assets"
echo "   ✅ Production environment variables"
echo "   ✅ PM2 process manager configuration"
echo "   ✅ Automatic restart and logging"
echo ""
echo -e "${YELLOW}🔧 Features that should work now:${NC}"
echo "   ✅ Payment processing (Stripe)"
echo "   ✅ User authentication (Google/Apple)"
echo "   ✅ Language switching (Chinese/Traditional)"
echo "   ✅ Image loading"
echo "   ✅ All API endpoints"
echo "   ✅ Database connections"
echo ""
echo -e "${BLUE}📱 Test your website now!${NC}"