# Setup Guide - Editing Pro Studio Chatbot

## Prerequisites

- Node.js 16+ (https://nodejs.org/)
- npm 8+ or yarn
- Git
- OpenAI API Key (https://platform.openai.com/api-keys)
- Twilio Account (https://www.twilio.com/)
- Firebase Project (https://firebase.google.com/)

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/astrogopalakrishnan123-star/editing-pro-studio-chatbot.git
cd editing-pro-studio-chatbot
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### 5. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

#### OpenAI Configuration
```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4
```

Get your key from: https://platform.openai.com/api-keys

#### Twilio Configuration
```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
```

Get from: https://console.twilio.com/

#### Firebase Configuration
```
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_API_KEY=your_api_key
# ... (other Firebase config)
```

Get from: https://console.firebase.google.com/

#### JWT Configuration
```
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRY=7d
```

### 6. Start Development Servers
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## Running Individual Servers

### Backend Only
```bash
npm run dev:backend
```

### Frontend Only
```bash
npm run dev:frontend
```

## Build for Production

```bash
npm run build
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Backend (Render or Railway)
1. Push code to GitHub
2. Create new service on Render/Railway
3. Set environment variables
4. Deploy

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -i :5000
kill -9 <PID>

# For Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### CORS Issues
Ensure `CORS_ORIGINS` in `.env.local` includes your frontend URL.

### OpenAI API Errors
- Check API key validity
- Verify you have credits/subscription
- Check rate limits

### Twilio Connection Issues
- Verify credentials
- Check webhook URL is accessible
- Ensure IP whitelist is configured

### Firebase Connection Issues
- Verify project ID and credentials
- Check Firebase security rules
- Ensure database is created

## Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

## Next Steps

1. Configure your services in admin dashboard
2. Setup WhatsApp integration with Twilio
3. Train AI model with your specific responses
4. Add your branding/logo
5. Test chatbot thoroughly
6. Deploy to production

## Support

For issues:
1. Check this guide again
2. Check GitHub Issues
3. Contact support
