"use client"

import * as React from "react"
import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Loader2,
  Send,
  Wallet,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const BLOCKCHAIN_NETWORKS = [
  {
    value: "base-sepolia",
    label: "Base Sepolia (Testnet)",
  },
]

const STABLECOINS = [{ value: "eth", label: "ETH (Native)" }]

interface Message {
  id: string
  role: "user" | "agent" | "system"
  content: string
  payment?: PaymentInfo
  status?: "pending" | "processing" | "completed" | "failed"
}

interface PaymentInfo {
  amount: string
  token: string
  network: string
  to: string
  from?: string
  txHash?: string
}

export default function X402PaymentBlock() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      role: "system",
      content:
        "Welcome to the x402 Payment Protocol demo. This is a visual demonstration of the payment flow. Connect your wallet to start!",
      status: "completed",
    },
  ])
  const [input, setInput] = React.useState("")
  const [network, setNetwork] = React.useState("base-sepolia")
  const [token, setToken] = React.useState("eth")
  const [recipientAddress, setRecipientAddress] = React.useState("")
  const [isConnected, setIsConnected] = React.useState(false)
  const [address, setAddress] = React.useState("")
  const [isInitialized, setIsInitialized] = React.useState(false)
  const [isInitializing, setIsInitializing] = React.useState(false)
  const [isPending, setIsPending] = React.useState(false)
  const [showWalletDialog, setShowWalletDialog] = React.useState(false)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const walletConnectors = [
    { id: "coinbase", name: "Coinbase Wallet" },
    { id: "metamask", name: "MetaMask" },
  ]

  const handleConnectWallet = (connectorId: string) => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress("0x1234...5678")
    setShowWalletDialog(false)

    setTimeout(() => {
      const welcomeMsg: Message = {
        id: `${Date.now()}-welcome`,
        role: "system",
        content:
          "Wallet connected! Initialize the x402 protocol with a 0.001 ETH payment to activate.",
        status: "completed",
      }
      setMessages((prev) => [...prev, welcomeMsg])
    }, 500)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress("")
    setIsInitialized(false)
    setMessages([
      {
        id: "1",
        role: "system",
        content:
          "Welcome to the x402 Payment Protocol demo. This is a visual demonstration of the payment flow. Connect your wallet to start!",
        status: "completed",
      },
    ])
  }

  const handleInitializePayment = async () => {
    if (!isConnected || isInitializing) return

    setIsInitializing(true)
    const paymentId = `${Date.now()}-init-payment`

    const initMessage: Message = {
      id: paymentId,
      role: "agent",
      content:
        "Initializing x402 protocol with 0.001 ETH payment to Base Sepolia testnet...",
      payment: {
        amount: "0.001",
        token: "ETH",
        network: "Base Sepolia",
        to: "0xb1ae...f906",
        from: address,
      },
      status: "processing",
    }

    setMessages((prev) => [...prev, initMessage])

    // Simulate transaction
    setTimeout(() => {
      const txHash = "0x" + Math.random().toString(16).slice(2, 42)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === paymentId
            ? {
                ...msg,
                content:
                  "Initialization payment confirmed! You can now use the x402 protocol.",
                status: "completed" as const,
                payment: msg.payment
                  ? {
                      ...msg.payment,
                      txHash: txHash,
                    }
                  : undefined,
              }
            : msg
        )
      )

      setIsInitialized(true)
      setIsInitializing(false)

      const successMessage: Message = {
        id: `${Date.now()}-init-success`,
        role: "system",
        content: `Initialization complete! Your wallet is now active on the x402 protocol. View transaction: https://sepolia.basescan.org/tx/${txHash}`,
        status: "completed",
      }
      setMessages((prev) => [...prev, successMessage])
    }, 2000)
  }

  const handleSendPayment = async () => {
    if (
      !input.trim() ||
      !recipientAddress ||
      !isConnected ||
      isPending ||
      !isInitialized
    )
      return

    const amount = parseFloat(input.trim())
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount")
      return
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(recipientAddress)) {
      alert("Please enter a valid Ethereum address")
      return
    }

    setIsPending(true)
    const paymentId = `${Date.now()}-payment`

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: `Request payment: ${amount} ${token.toUpperCase()} on Base Sepolia`,
      payment: {
        amount: amount.toString(),
        token: token.toUpperCase(),
        network: "Base Sepolia",
        to: recipientAddress,
        from: address,
      },
      status: "completed",
    }

    const paymentMessage: Message = {
      id: paymentId,
      role: "agent",
      content: "Initiating x402 payment request...",
      payment: {
        amount: amount.toString(),
        token: token.toUpperCase(),
        network: "Base Sepolia",
        to: recipientAddress,
        from: address,
      },
      status: "processing",
    }

    setMessages((prev) => [...prev, userMessage, paymentMessage])

    // Simulate transaction
    setTimeout(() => {
      const txHash = "0x" + Math.random().toString(16).slice(2, 42)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === paymentId
            ? {
                ...msg,
                content: "Payment confirmed! Resource access granted.",
                status: "completed" as const,
                payment: msg.payment
                  ? {
                      ...msg.payment,
                      txHash: txHash,
                    }
                  : undefined,
              }
            : msg
        )
      )

      const successMessage: Message = {
        id: `${Date.now()}-success`,
        role: "system",
        content: `Successfully transferred using x402 protocol. View on Base Sepolia explorer: https://sepolia.basescan.org/tx/${txHash}`,
        status: "completed",
      }
      setMessages((prev) => [...prev, successMessage])
      setIsPending(false)
      setInput("")
    }, 2000)
  }

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-6 w-6" />
            x402 Payment Protocol Demo
          </CardTitle>
          <CardDescription>
            Visual demonstration of payment flow on Base Sepolia testnet
          </CardDescription>

          {/* Wallet Connection Section */}
          <div className="bg-muted/50 mt-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Wallet Status</p>
                {isConnected && address ? (
                  <div className="mt-1 space-y-1">
                    <p className="text-muted-foreground text-xs">
                      Connected: {address}
                    </p>
                    {!isInitialized && !isInitializing && (
                      <Badge variant="outline" className="text-xs">
                        Initialization Required
                      </Badge>
                    )}
                    {isInitialized && (
                      <Badge variant="default" className="gap-1 text-xs">
                        <CheckCircle2 className="h-3 w-3" />
                        Initialized
                      </Badge>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground mt-1 text-xs">
                    Not connected
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                {isConnected ? (
                  <>
                    {!isInitialized && (
                      <Button
                        onClick={handleInitializePayment}
                        size="sm"
                        disabled={isInitializing || isPending}
                      >
                        {isInitializing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Initializing...
                          </>
                        ) : (
                          "Initialize (0.001 ETH)"
                        )}
                      </Button>
                    )}
                    <Button
                      onClick={handleDisconnect}
                      variant="outline"
                      size="sm"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setShowWalletDialog(true)} size="sm">
                    <Wallet className="mr-2 h-4 w-4" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Wallet Selection Dialog */}
          <Dialog open={showWalletDialog} onOpenChange={setShowWalletDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connect Your Wallet</DialogTitle>
                <DialogDescription>
                  Choose a wallet to connect to Base Sepolia testnet
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {walletConnectors.map((connector) => (
                  <Button
                    key={connector.id}
                    onClick={() => handleConnectWallet(connector.id)}
                    variant="outline"
                    className="h-auto justify-start py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                        <Wallet className="text-primary h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{connector.name}</p>
                        <p className="text-muted-foreground text-xs">
                          Connect with {connector.name}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="network">Blockchain Network</Label>
              <Select value={network} onValueChange={setNetwork} disabled>
                <SelectTrigger id="network">
                  <SelectValue placeholder="Select network" />
                </SelectTrigger>
                <SelectContent>
                  {BLOCKCHAIN_NETWORKS.map((n) => (
                    <SelectItem key={n.value} value={n.value}>
                      {n.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="token">Token</Label>
              <Select value={token} onValueChange={setToken} disabled>
                <SelectTrigger id="token">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {STABLECOINS.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2 lg:col-span-1">
              <Label htmlFor="wallet">Recipient Address</Label>
              <Input
                id="wallet"
                type="text"
                placeholder="0x..."
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                disabled={!isConnected || !isInitialized}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Visual Demo
            </Badge>
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Base Sepolia Testnet
            </Badge>
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Multi-Wallet Support
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea
            className="h-[400px] rounded-md border p-4"
            ref={scrollAreaRef}
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role !== "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback
                        className={
                          message.role === "agent"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }
                      >
                        {message.role === "agent" ? "AI" : "S"}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] space-y-2 ${
                      message.role === "user" ? "order-first" : ""
                    }`}
                  >
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : message.role === "system"
                            ? "bg-muted/50 border"
                            : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      {message.payment && (
                        <div className="mt-3 space-y-2 border-t pt-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Amount:
                            </span>
                            <span className="font-medium">
                              {message.payment.amount} {message.payment.token}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Network:
                            </span>
                            <span className="font-medium capitalize">
                              {message.payment.network}
                            </span>
                          </div>
                          {message.payment.from && (
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">
                                From:
                              </span>
                              <code className="font-mono text-[10px]">
                                {message.payment.from}
                              </code>
                            </div>
                          )}
                          {message.payment.txHash && (
                            <div className="flex flex-col gap-1 text-xs">
                              <span className="text-muted-foreground">
                                Tx Hash:
                              </span>
                              <code className="font-mono text-[10px] break-all text-blue-500">
                                {message.payment.txHash}
                              </code>
                            </div>
                          )}
                          <div className="mt-2 flex items-center gap-1">
                            {message.status === "pending" && (
                              <>
                                <Loader2 className="h-3 w-3 animate-spin" />
                                <span className="text-xs">Pending...</span>
                              </>
                            )}
                            {message.status === "processing" && (
                              <>
                                <Loader2 className="h-3 w-3 animate-spin" />
                                <span className="text-xs">Processing...</span>
                              </>
                            )}
                            {message.status === "completed" && (
                              <>
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span className="text-xs text-green-600 dark:text-green-400">
                                  Completed
                                </span>
                              </>
                            )}
                            {message.status === "failed" && (
                              <>
                                <AlertCircle className="h-3 w-3 text-red-500" />
                                <span className="text-xs text-red-600 dark:text-red-400">
                                  Failed
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendPayment()
            }}
            className="flex gap-2"
          >
            <div className="relative flex-1">
              <CreditCard className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Enter amount in ETH (e.g., 0.001)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={
                  !isConnected ||
                  isPending ||
                  !recipientAddress ||
                  !isInitialized
                }
                className="pl-10"
                type="number"
                step="0.000001"
                min="0"
              />
            </div>
            <Button
              type="submit"
              disabled={
                !isConnected ||
                isPending ||
                !recipientAddress ||
                !input.trim() ||
                !isInitialized
              }
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
          {!isConnected && (
            <p className="text-muted-foreground text-center text-sm">
              Please connect your wallet to start the demo
            </p>
          )}
          {isConnected && !isInitialized && (
            <p className="text-muted-foreground text-center text-sm">
              Initialize your wallet to activate the x402 protocol demo
            </p>
          )}
          {isConnected && isInitialized && !recipientAddress && (
            <p className="text-muted-foreground text-center text-sm">
              Enter a recipient address to send a transaction
            </p>
          )}
          <div className="bg-muted/50 space-y-2 rounded-md p-3 text-xs">
            <div>
              <p className="font-medium">About x402 Protocol Demo:</p>
              <p className="text-muted-foreground mt-1">
                This is a visual demonstration of the x402 payment protocol UI.
                All transactions are simulated for display purposes. The actual
                blockchain integration is separate from the UI components.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
