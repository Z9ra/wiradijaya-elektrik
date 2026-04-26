import { Mail, Shield, Sparkles, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SimpleCryptoLogin() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <Card className="border-border/50 relative w-full max-w-lg overflow-hidden shadow-xl">
        <div className="from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-purple-500/5" />

        <CardHeader className="relative space-y-4 pb-8 text-center">
          <div className="from-primary shadow-primary/20 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br to-purple-600 shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              Web3 Login Simplified
            </CardTitle>
            <CardDescription className="mx-auto max-w-sm text-base [text-wrap:balance]">
              Enjoy quick and secure access to your accounts on various Web3
              platforms.
            </CardDescription>
          </div>

          <div className="bg-muted/50 mx-auto flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <Shield className="h-3.5 w-3.5 text-green-600 dark:text-green-500" />
            <span className="text-muted-foreground">
              Secure & Encrypted Connection
            </span>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@mail.com"
                  className="h-11 pl-10"
                />
              </div>
            </div>

            <Button className="shadow-primary/20 hover:shadow-primary/30 h-11 w-full font-semibold shadow-lg transition-all hover:shadow-xl">
              Connect with Email
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="border-border/60 w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card text-muted-foreground px-4 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="hover:bg-muted/50 hover:border-primary/20 h-11 w-full justify-start gap-3 font-medium transition-all"
            >
              <img
                src="https://v3.material-tailwind.com/icon/google.svg"
                alt="google"
                className="h-5 w-5"
              />
              Sign in with Google
            </Button>

            <Button
              variant="outline"
              className="hover:bg-muted/50 hover:border-primary/20 h-11 w-full justify-start gap-3 font-medium transition-all"
            >
              <Wallet className="h-5 w-5" />
              Wallet Authentication
            </Button>
          </div>
        </CardContent>

        <CardFooter className="relative flex-col gap-4 px-6 pt-4 pb-8">
          <div className="bg-muted/30 border-border/50 w-full rounded-lg border p-4">
            <p className="text-muted-foreground text-center text-xs leading-relaxed">
              Upon signing in, you consent to abide by our{" "}
              <a
                href="#"
                className="text-primary font-medium underline-offset-4 transition-colors hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary font-medium underline-offset-4 transition-colors hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <p className="text-muted-foreground text-center text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-primary font-medium underline-offset-4 transition-colors hover:underline"
            >
              Sign up for free
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
