#!/bin/bash

# Diagnose functionality issues
echo "🔍 Diagnosing payment, language, and login issues..."

ssh -i ~/.ssh/fengshui.pem ec2-user@54.205.0.111 << 'EOF'
  cd /home/ec2-user/fengshui-layout
  
  echo "📊 PM2 Status and Memory:"
  pm2 status
  echo ""
  
  echo "🌐 Testing API endpoints:"
  echo "Testing NextAuth endpoint..."
  curl -I http://localhost:3000/api/auth/status 2>/dev/null | head -3 || echo "Auth API failed"
  echo ""
  
  echo "Testing payment endpoint..."
  curl -I http://localhost:3000/api/checkoutSessions 2>/dev/null | head -3 || echo "Payment API failed"
  echo ""
  
  echo "🔧 Environment variables check:"
  echo "NEXTAUTH_URL: $(grep NEXTAUTH_URL .env | head -1)"
  echo "NEXTAUTH_SECRET: $(grep NEXTAUTH_SECRET .env | head -1 | cut -c1-30)..."
  echo "STRIPE_SECRET_KEY: $(grep STRIPE_SECRET_KEY .env | head -1 | cut -c1-30)..."
  echo ""
  
  echo "📋 Recent error logs (focusing on API/functionality issues):"
  pm2 logs --lines 50 --nostream | grep -E "(Error|Failed|Cannot|404|500)" | tail -10 || echo "No recent critical errors"
  echo ""
  
  echo "🌍 Testing locale/language switching:"
  curl -I http://localhost:3000/zh-CN 2>/dev/null | head -3 || echo "Locale switch failed"
  echo ""
  
  echo "🔍 Checking Next.js build for client-side issues:"
  ls -la .next/static/chunks/ | head -5
  echo ""
  
  echo "📱 Testing if JavaScript bundles are loading:"
  curl -I http://localhost:3000/_next/static/chunks/main.js 2>/dev/null | head -3 || echo "Main JS bundle failed"
EOF