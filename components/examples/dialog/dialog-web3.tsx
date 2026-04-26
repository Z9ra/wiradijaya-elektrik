import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogWeb3() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent className="pb-4 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect a Wallet</DialogTitle>
          <DialogDescription>
            Choose which card you want to connect
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h6 className="mb-2 font-semibold">Popular</h6>
          <div className="space-y-2">
            <Button
              variant="secondary"
              className="flex w-full items-center justify-center gap-2"
            >
              <img
                alt="metamask"
                src="https://docs.material-tailwind.com/icons/metamask.svg"
                className="h-5 w-5"
              />
              <span className="font-semibold">Connect with MetaMask</span>
            </Button>
            <Button
              variant="secondary"
              className="flex w-full items-center justify-center gap-2"
            >
              <img
                alt="coinbase"
                src="https://docs.material-tailwind.com/icons/coinbase.svg"
                className="h-6 w-6 rounded"
              />
              <span className="font-semibold">Connect with Coinbase</span>
            </Button>
          </div>
          <h6 className="mt-6 mb-2 font-semibold">Other</h6>
          <Button
            variant="secondary"
            className="flex w-full items-center justify-center gap-2"
          >
            <img
              alt="trust-wallet"
              src="https://docs.material-tailwind.com/icons/trust-wallet.svg"
              className="h-6 w-6 rounded"
            />
            <span className="font-semibold">Connect with Trust Wallet</span>
          </Button>
        </div>
        <div className="mt-12 flex w-full items-center justify-between gap-2">
          <p className="text-muted-foreground text-sm">
            New to Ethereum wallets?
          </p>
          <Button variant="outline" size="sm">
            Learn More
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
