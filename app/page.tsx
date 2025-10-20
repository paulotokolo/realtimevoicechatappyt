import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Mic, 
  Users, 
  Zap, 
  Shield, 
  MessageSquare, 
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is logged in, redirect to dashboard
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Redirecting to dashboard...</p>
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href = '/dashboard'` }} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">VoiceChat</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🎉 Now with Real-time Communication
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Connect Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Voice
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience seamless real-time voice communication with friends, colleagues, and communities. 
              Crystal clear audio, instant connections, and powerful features built for modern communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Chatting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-10 left-10 hidden lg:block">
          <Card className="w-64 shadow-lg rotate-3 hover:rotate-6 transition-transform">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Live Chat</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">&ldquo;The audio quality is incredible! 🎙️&rdquo;</p>
            </CardContent>
          </Card>
        </div>

        <div className="absolute top-20 right-10 hidden lg:block">
          <Card className="w-64 shadow-lg -rotate-3 hover:-rotate-6 transition-transform">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-muted-foreground">Group Chat</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">&ldquo;Perfect for our team meetings! 🚀&rdquo;</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VoiceChat?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology for the best voice communication experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Ultra-low latency voice transmission for real-time conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  End-to-end encryption ensures your conversations stay private
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Group Chats</CardTitle>
                <CardDescription>
                  Connect with multiple people simultaneously in crystal clear quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>
                  Connect with anyone, anywhere in the world with our global infrastructure
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Smart Features</CardTitle>
                <CardDescription>
                  Noise cancellation, echo reduction, and adaptive audio quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Easy to Use</CardTitle>
                <CardDescription>
                  Simple, intuitive interface that gets you talking in seconds
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Everything you need for modern communication
              </h2>
              <div className="space-y-4">
                {[
                  "Crystal clear HD voice quality",
                  "Instant connection with zero setup",
                  "Works on all devices and platforms",
                  "Advanced noise cancellation",
                  "Secure Google OAuth authentication",
                  "Real-time communication technology"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-center">Ready to get started?</CardTitle>
                <CardDescription className="text-center">
                  Join thousands of users already enjoying seamless voice communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/signup" className="w-full">
                  <Button className="w-full" size="lg">
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full" size="lg">
                    Sign In
                  </Button>
                </Link>
                <p className="text-xs text-center text-muted-foreground">
                  No credit card required • Free forever • Setup in 30 seconds
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">VoiceChat</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting voices, building communities.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 VoiceChat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
