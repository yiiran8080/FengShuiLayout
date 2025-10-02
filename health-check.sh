#!/bin/bash

# Quick Health Check Script for FengShui Layout
# Run this script to verify your deployment is working correctly

set -e

# Configuration
REMOTE_HOST="fs"
WEBSITE_URL="https://www.harmoniqfengshui.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[CHECK]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[PASS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[FAIL]${NC} $1"
}

echo "🔍 FengShui Layout Health Check"
echo "==============================="

# Check 1: Server Connection
print_status "Testing server connection..."
if ssh -o BatchMode=yes -o ConnectTimeout=5 $REMOTE_HOST exit 2>/dev/null; then
    print_success "Server connection OK"
else
    print_error "Cannot connect to server"
    exit 1
fi

# Check 2: PM2 Status
print_status "Checking PM2 processes..."
PM2_STATUS=$(ssh $REMOTE_HOST "pm2 jlist" 2>/dev/null)
if echo "$PM2_STATUS" | grep -q '"status":"online"'; then
    print_success "PM2 process is running"
    ssh $REMOTE_HOST "pm2 status"
else
    print_error "PM2 process is not running"
    echo "Run: ssh $REMOTE_HOST 'pm2 start ecosystem.config.js'"
fi

# Check 3: Local Server Response
print_status "Testing local server response..."
LOCAL_RESPONSE=$(ssh $REMOTE_HOST "curl -s -o /dev/null -w '%{http_code}' http://localhost:3000" 2>/dev/null)
if [ "$LOCAL_RESPONSE" = "200" ]; then
    print_success "Local server responding (HTTP $LOCAL_RESPONSE)"
else
    print_error "Local server not responding (HTTP $LOCAL_RESPONSE)"
fi

# Check 4: Public Website
print_status "Testing public website..."
PUBLIC_RESPONSE=$(curl -s -o /dev/null -w '%{http_code}' $WEBSITE_URL 2>/dev/null)
if [ "$PUBLIC_RESPONSE" = "200" ]; then
    print_success "Public website responding (HTTP $PUBLIC_RESPONSE)"
else
    print_error "Public website not responding (HTTP $PUBLIC_RESPONSE)"
fi

# Check 5: Static Assets
print_status "Checking static assets (JS/CSS)..."
if curl -s $WEBSITE_URL | grep -q "_next/static"; then
    print_success "Static assets are referenced in HTML"
    
    # Test actual JS file
    JS_RESPONSE=$(curl -s -o /dev/null -w '%{http_code}' "$WEBSITE_URL/_next/static/chunks/main-app-*.js" 2>/dev/null || echo "404")
    if [ "$JS_RESPONSE" = "200" ]; then
        print_success "JavaScript files are accessible"
    else
        print_warning "JavaScript files may not be accessible"
    fi
else
    print_error "Static assets not properly referenced"
fi

# Check 6: Images
print_status "Checking image assets..."
IMAGE_RESPONSE=$(curl -s -o /dev/null -w '%{http_code}' "$WEBSITE_URL/images/logo/logo.png" 2>/dev/null)
if [ "$IMAGE_RESPONSE" = "200" ]; then
    print_success "Image assets are accessible"
else
    print_warning "Some image assets may not be accessible"
fi

# Check 7: Server Resources
print_status "Checking server resources..."
ssh $REMOTE_HOST << 'EOF'
echo "Memory Usage:"
free -h | grep Mem
echo ""
echo "Disk Usage:"
df -h | grep -E "/$|/home"
echo ""
echo "Application Logs (last 5 lines):"
pm2 logs fengshui-app --lines 5 --nostream || echo "No logs available"
EOF

# Summary
echo ""
echo "🏁 Health Check Complete"
echo "========================"

# Final recommendation
print_status "Recommendations:"
if [ "$PUBLIC_RESPONSE" = "200" ]; then
    echo "✅ Your website is live and accessible at $WEBSITE_URL"
else
    echo "❌ Issues detected. Check the logs with: ssh $REMOTE_HOST 'pm2 logs'"
fi

echo ""
echo "Useful maintenance commands:"
echo "  View logs:     ssh $REMOTE_HOST 'pm2 logs'"
echo "  Restart app:   ssh $REMOTE_HOST 'pm2 restart all'"
echo "  Check status:  ssh $REMOTE_HOST 'pm2 status'"
echo "  Monitor:       ssh $REMOTE_HOST 'pm2 monit'"