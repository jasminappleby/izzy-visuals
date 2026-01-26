# Email Setup Instructions

The contact form now sends emails directly through a backend server instead of opening your mail client.

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Gmail App Password

Since the backend uses Gmail's SMTP server, you need to create an app-specific password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go back to Security settings
4. Find **App passwords** 
5. Select "Mail" and "Windows Computer" (or your device)
6. Google will generate a 16-character password
7. Copy this password

### 3. Create .env File
Create a `.env` file in the root directory with your Gmail credentials:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
PORT=5000
```

### 4. Run the Backend Server
In the root directory:
```bash
node server.js
```

The server should start on `http://localhost:5000`

### 5. Run the Frontend (in another terminal)
```bash
cd my-app
npm run dev
```

## How It Works

1. User fills out the contact form
2. Form data is sent to the backend API (`POST /api/contact`)
3. Backend sends an email to `Izzyvisuals14@gmail.com` with the form details
4. User gets a confirmation message
5. User can reply to the email to respond back to the client (replyTo is set to their email)

## Troubleshooting

- **"Failed to send email" error**: Check that your EMAIL_USER and EMAIL_PASSWORD in .env are correct
- **Port 5000 already in use**: Change PORT in .env to another port (e.g., 5001), and update the fetch URL in Contact.tsx
- **Gmail blocking login**: Make sure you used an app-specific password, not your regular Gmail password
