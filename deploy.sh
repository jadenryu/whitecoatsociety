#!/bin/bash

# White Coats Society Deployment Script
# This script helps prepare your application for deployment

echo "🚀 White Coats Society Deployment Helper"
echo "=========================================="

# Check if we're in the right directory
if [[ ! -f "package.json" ]]; then
    echo "❌ Error: Please run this script from the root of your project"
    exit 1
fi

echo "✅ Found package.json - you're in the right directory"

# Check if backend directory exists
if [[ ! -d "backend/backend" ]]; then
    echo "❌ Error: Backend directory not found. Expected: backend/backend/"
    exit 1
fi

echo "✅ Found backend directory"

# Check if important files exist
echo "🔍 Checking for important files..."

if [[ -f "backend/backend/requirements.txt" ]]; then
    echo "✅ Found requirements.txt"
else
    echo "❌ Missing requirements.txt in backend"
fi

if [[ -f "backend/backend/main.py" ]]; then
    echo "✅ Found main.py"
else
    echo "❌ Missing main.py in backend"
fi

if [[ -f ".env.local" ]]; then
    echo "✅ Found .env.local"
else
    echo "⚠️  No .env.local found - you'll need to set environment variables in deployment platforms"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Commit all your changes to Git"
echo "2. Push to GitHub"
echo "3. Follow the DEPLOYMENT_GUIDE.md"
echo "4. Use the DEPLOYMENT_CHECKLIST.md to track progress"
echo ""
echo "🌐 Your app will be available at: https://whitecoatsociety.org"
echo ""
echo "Good luck! 🍀" 