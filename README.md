# Real-time Voice Chat App

A Next.js application with Supabase authentication and real-time voice chat capabilities.

## Features

- 🔐 Google OAuth authentication via Supabase
- 🛡️ Protected routes with middleware
- 🎨 Modern UI with shadcn/ui components
- 📱 Responsive design
- 🚀 Built with Next.js 15 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase project
- Google OAuth credentials

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd realtimevoicechatappyt
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Authentication > Providers
3. Enable Google provider and add your OAuth credentials:
   - Get Google OAuth credentials from [Google Cloud Console](https://console.cloud.google.com)
   - Add authorized redirect URIs:
     - `http://localhost:3000/auth/callback` (development)
     - `https://yourdomain.com/auth/callback` (production)

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
app/
├── (protected)/          # Protected routes (requires authentication)
│   └── dashboard/        # Main dashboard page
├── auth/
│   ├── callback/         # OAuth callback handler
│   └── auth-code-error/  # Error page for auth failures
├── login/                # Login page
├── signup/               # Signup page (redirects to Google OAuth)
├── globals.css           # Global styles
├── layout.tsx            # Root layout
└── page.tsx             # Home page (redirects based on auth status)

components/
├── ui/                   # shadcn/ui components
└── logout-button.tsx     # Logout functionality

lib/
├── supabase/            # Supabase client configurations
│   ├── client.ts        # Browser client
│   ├── server.ts        # Server client
│   └── middleware.ts    # Middleware utilities
└── utils.ts             # Utility functions

middleware.ts            # Next.js middleware for route protection
```

## Authentication Flow

1. **Unauthenticated users** are redirected to `/login`
2. **Login page** provides Google OAuth signin
3. **OAuth callback** handles the authentication response
4. **Authenticated users** are redirected to `/dashboard`
5. **Protected routes** under `(protected)/` require authentication

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Update Supabase OAuth redirect URIs with your production domain

### Other Platforms

Ensure you:
1. Set the correct environment variables
2. Update OAuth redirect URIs in Supabase
3. Configure your domain in Supabase settings

## Customization

### Adding New Protected Routes

Create new pages under `app/(protected)/` - they'll automatically require authentication.

### Styling

- Uses Tailwind CSS and shadcn/ui components
- Global styles in `app/globals.css`
- Component styles follow shadcn/ui patterns

### Database

Extend your Supabase database as needed for your voice chat features:
- User profiles
- Chat rooms
- Voice session data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
