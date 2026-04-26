import { ChevronLeft, Copy, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ScanQrCodeLogin() {
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
          Connect via QR Code
        </CardTitle>
        <CardDescription className="mx-auto max-w-lg [text-wrap:balance]">
          Use your mobile wallet or phone's camera to scan this QR code and
          connect instantly.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <img
          alt="qr-code"
          src="https://v3.material-tailwind.com/qr-code.png"
          className="mx-auto h-64 w-64 sm:h-80 sm:w-80"
        />
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <div className="flex w-full flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            className="flex w-full items-center gap-2 md:w-auto"
          >
            <Copy className="h-4 w-4" />
            Copy qr code
          </Button>
          <Button
            variant="outline"
            className="flex w-full items-center gap-2 md:w-auto"
          >
            <Download className="h-4 w-4" />
            install extension
          </Button>
        </div>
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
