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

export default function ChooseCryptoWalletLogin() {
  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader className="text-center">
        <CardTitle className="mt-4 text-lg md:text-xl lg:text-2xl">
          Choose Your Wallet
        </CardTitle>
        <CardDescription className="mx-auto max-w-lg [text-wrap:balance]">
          Select from a range of wallets for seamless authentication and secure
          access.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 px-8 pt-0 pb-8">
        <div className="w-full space-y-1.5">
          <Label htmlFor="search">Choose Wallet</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search through 50+ wallets available..."
          />
        </div>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/metamask.svg"
            alt="metamask"
            className="h-5 w-5"
          />
          Metamask
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/coinbase.svg"
            alt="coinbase"
            className="h-5 w-5"
          />
          Coinbase
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/trust.svg"
            alt="trust"
            className="h-5 w-5"
          />
          Trust
        </Button>
        <Button className="w-full">Connect</Button>
      </CardContent>
      <CardFooter className="px-8 pt-0 pb-8">
        <p className="text-muted-foreground mx-auto block max-w-xs text-center text-sm">
          Upon signing in, you consent to abide by our{" "}
          <a href="#" className="text-orange-500 dark:text-white">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="text-orange-500 dark:text-white">
            Privacy Policy.
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
