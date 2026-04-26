import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ChooseBlockchainLogin() {
  return (
    <Card className="relative mx-auto w-full max-w-lg">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1 left-1 shadow-none hover:shadow-none"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <CardHeader className="text-center">
        <CardTitle className="mt-6 text-lg md:text-xl lg:text-2xl">
          Choose Your Blockchain
        </CardTitle>
        <CardDescription className="mx-auto mb-6 max-w-lg [text-wrap:balance]">
          This wallet facilitates connectivity across various chains. Choose the
          chain you wish to link with.
        </CardDescription>
        <img
          alt="trust"
          src="https://v3.material-tailwind.com/icon/trust.svg"
          className="mx-auto h-16 w-16"
        />
      </CardHeader>
      <CardContent className="space-y-4 px-8 pt-0 pb-8">
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/bitcoin.svg"
            alt="bitcoin"
            className="h-5 w-5"
          />
          Bitcoin
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/solana.svg"
            alt="solana"
            className="h-5 w-5"
          />
          Solana
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/eth.svg"
            alt="eth"
            className="h-5 w-5"
          />
          Ethereum
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3">
          <img
            src="https://v3.material-tailwind.com/icon/binance.svg"
            alt="binance"
            className="h-5 w-5"
          />
          Binance Smart Chain
        </Button>
        <Button className="w-full">Connect</Button>
      </CardContent>
      <CardFooter className="px-8 pt-0 pb-8">
        <p className="text-muted-foreground mx-auto block max-w-xs text-center text-sm">
          Upon signing in, you consent to abide by our{" "}
          <a href="#" className="text-foreground dark:text-white">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="text-foreground dark:text-white">
            Privacy Policy.
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
