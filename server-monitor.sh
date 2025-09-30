#!/bin/bash

# Server Performance Monitoring Script
# Run this on your EC2 instance to monitor resource usage

echo "=== Server Performance Report $(date) ==="
echo ""

echo "📊 CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print $2 $3 $4}'
echo ""

echo "🧠 Memory Usage:"
free -h
echo ""

echo "💾 Disk Usage:"
df -h /
echo ""

echo "🔄 PM2 Process Status:"
pm2 status
echo ""

echo "📈 Memory Usage by Process:"
ps aux --sort=-%mem | head -10
echo ""

echo "⚡ Network Connections:"
ss -tuln | grep :3000
echo ""

echo "🔗 Active Connections Count:"
netstat -an | grep :3000 | grep ESTABLISHED | wc -l
echo ""

echo "📋 Load Average:"
uptime
echo ""

echo "🌡️ PM2 Process Memory:"
pm2 describe 0 | grep -E "(memory|cpu)"