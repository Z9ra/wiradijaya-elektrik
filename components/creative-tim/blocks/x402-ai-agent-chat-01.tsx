"use client"

import * as React from "react"
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  Loader2,
  Send,
  Settings,
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

interface Message {
  id: string
  role: "user" | "agent" | "system"
  content: string
  status?:
    | "pending"
    | "processing"
    | "completed"
    | "failed"
    | "payment-required"
  paymentInfo?: {
    amount: string
    txHash?: string
    required: boolean
  }
}

export default function X402AIAgentChat() {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [isInitialized, setIsInitialized] = React.useState(false)
  const [isInitializing, setIsInitializing] = React.useState(false)
  const [showWalletDialog, setShowWalletDialog] = React.useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = React.useState(false)
  const [perRequestAmount, setPerRequestAmount] = React.useState("0.001")
  const [isConnected, setIsConnected] = React.useState(false)
  const [address, setAddress] = React.useState("")
  const [isPending, setIsPending] = React.useState(false)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const walletConnectors = [
    { id: "coinbase", name: "Coinbase Wallet" },
    { id: "metamask", name: "MetaMask" },
  ]

  // Initial greeting when component mounts
  React.useEffect(() => {
    if (messages.length === 0) {
      const greeting: Message = {
        id: "greeting",
        role: "agent",
        content:
          "Hello! I'm an x402-powered AI agent. This is a visual demo of the payment-per-request model. Connect your wallet and initialize to start!",
        status: "completed",
      }
      setMessages([greeting])
    }
  }, [messages.length])

  const generateAIResponse = (question: string): string => {
    const responses = [
      `Great question! Based on your inquiry about "${question.slice(0, 30)}...", I can provide you with detailed insights. The x402 protocol enables this seamless payment-per-interaction model.`,
      `Interesting! Regarding "${question.slice(0, 30)}...", here's what you need to know. This micropayment system allows for fair value exchange in AI interactions.`,
      `Thank you for your question about "${question.slice(0, 30)}...". Let me break this down for you using the power of blockchain-verified responses.`,
      `Excellent query! The answer to "${question.slice(0, 30)}..." involves several key concepts. Payment verification ensures quality responses every time.`,
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleConnectWallet = (connectorId: string) => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress("0x1234...5678")
    setShowWalletDialog(false)

    // Show initialization prompt after wallet connection
    setTimeout(() => {
      const initPrompt: Message = {
        id: `${Date.now()}-init-prompt`,
        role: "system",
        content:
          "Wallet connected! Now initialize the x402 protocol with a small payment (0.001 ETH) to activate your account.",
        status: "completed",
      }
      setMessages((prev) => [...prev, initPrompt])
    }, 500)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress("")
    setIsInitialized(false)
    setMessages([
      {
        id: "greeting",
        role: "agent",
        content:
          "Hello! I'm an x402-powered AI agent. This is a visual demo of the payment-per-request model. Connect your wallet and initialize to start!",
        status: "completed",
      },
    ])
  }

  const handleInitialize = async () => {
    if (!isConnected || isInitializing) return

    setIsInitializing(true)
    const initId = `${Date.now()}-init-payment`

    const initMsg: Message = {
      id: initId,
      role: "system",
      content: "Processing initialization payment...",
      status: "processing",
      paymentInfo: {
        amount: "0.001",
        required: true,
      },
    }

    setMessages((prev) => [...prev, initMsg])

    // Simulate initialization
    setTimeout(() => {
      setIsInitialized(true)
      setIsInitializing(false)

      const successMsg: Message = {
        id: `${Date.now()}-init-success`,
        role: "system",
        content: `✓ Initialization complete! Your wallet is active on the x402 protocol. Each question costs ${perRequestAmount} ETH. Ask me anything!`,
        status: "completed",
      }
      setMessages((prev) => [...prev, successMsg])
    }, 2000)
  }

  const handleSendMessage = async () => {
    if (!input.trim() || !isConnected || isPending) return

    if (!isInitialized) {
      const warningMsg: Message = {
        id: `${Date.now()}-warning`,
        role: "system",
        content:
          "⚠️ Please initialize the x402 protocol first before sending messages.",
        status: "failed",
      }
      setMessages((prev) => [...prev, warningMsg])
      return
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: input,
      status: "completed",
    }

    const paymentRequestId = `${Date.now()}-payment-request`

    // x402 Protocol: 402 Payment Required response
    const paymentRequiredMsg: Message = {
      id: paymentRequestId,
      role: "system",
      content: `⚠️ HTTP 402 Payment Required: Processing payment of ${perRequestAmount} ETH...`,
      status: "processing",
      paymentInfo: {
        amount: perRequestAmount,
        required: true,
      },
    }

    setMessages((prev) => [...prev, userMessage, paymentRequiredMsg])
    setInput("")
    setIsPending(true)

    // Simulate payment and response
    setTimeout(() => {
      const txHash = "0x" + Math.random().toString(16).slice(2, 42)

      // Update payment status
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === paymentRequestId
            ? {
                ...msg,
                content: `✓ Payment of ${perRequestAmount} ETH confirmed!`,
                status: "completed" as const,
                paymentInfo: {
                  ...msg.paymentInfo!,
                  txHash: txHash,
                },
              }
            : msg
        )
      )

      // Generate AI response after payment
      setTimeout(() => {
        const agentResponse: Message = {
          id: `${Date.now()}-response`,
          role: "agent",
          content: generateAIResponse(userMessage.content),
          status: "completed",
        }
        setMessages((prev) => [...prev, agentResponse])
        setIsPending(false)
      }, 1000)
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <div>
                <CardTitle>x402 AI Agent Chat</CardTitle>
                <CardDescription>
                  Pay-per-request AI powered by the x402 protocol (Demo)
                </CardDescription>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettingsDialog(true)}
              disabled={!isInitialized}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          {/* Status Bar */}
          <div className="bg-muted/50 mt-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Status</p>
                {isConnected && address ? (
                  <>
                    <p className="text-muted-foreground text-xs">{address}</p>
                    <div className="flex items-center gap-2">
                      {isInitialized ? (
                        <Badge variant="default" className="gap-1 text-xs">
                          <CheckCircle2 className="h-3 w-3" />
                          Active - {perRequestAmount} ETH per request
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          Initialization Required
                        </Badge>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground text-xs">Not connected</p>
                )}
              </div>
              <div className="flex gap-2">
                {isConnected ? (
                  <>
                    {!isInitialized && (
                      <Button
                        onClick={handleInitialize}
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
                  Choose a wallet to connect to the x402 AI Agent
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

          {/* Settings Dialog */}
          <Dialog
            open={showSettingsDialog}
            onOpenChange={setShowSettingsDialog}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Payment Settings</DialogTitle>
                <DialogDescription>
                  Configure the amount paid per AI response
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Per-Request Amount (ETH)</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.0001"
                    min="0.0001"
                    value={perRequestAmount}
                    onChange={(e) => setPerRequestAmount(e.target.value)}
                  />
                  <p className="text-muted-foreground text-xs">
                    Each AI response will cost this amount in ETH
                  </p>
                </div>
                <Button
                  onClick={() => setShowSettingsDialog(false)}
                  className="w-full"
                >
                  Save Settings
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent className="space-y-4">
          <ScrollArea
            className="h-[500px] rounded-md border p-4"
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
                        {message.role === "agent" ? (
                          <Bot className="h-4 w-4" />
                        ) : (
                          "S"
                        )}
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
                          : message.status === "payment-required"
                            ? "border-2 border-orange-500 bg-orange-50 dark:bg-orange-950/20"
                            : message.status === "failed"
                              ? "border border-red-300 bg-red-50 dark:bg-red-950/20"
                              : message.role === "system"
                                ? "bg-muted/50 border"
                                : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>

                      {message.paymentInfo && (
                        <div className="mt-2 flex items-center gap-2 border-t pt-2">
                          {message.status === "processing" && (
                            <>
                              <Loader2 className="h-3 w-3 animate-spin" />
                              <span className="text-xs">
                                Payment processing...
                              </span>
                            </>
                          )}
                          {message.status === "completed" &&
                            message.paymentInfo.txHash && (
                              <>
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <code className="font-mono text-xs text-blue-500">
                                  {message.paymentInfo.txHash.slice(0, 10)}...
                                </code>
                              </>
                            )}
                          {message.status === "payment-required" && (
                            <AlertCircle className="h-3 w-3 text-orange-500" />
                          )}
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
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <Input
              placeholder={
                isInitialized
                  ? `Ask anything... (${perRequestAmount} ETH per response)`
                  : "Initialize to start chatting..."
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={!isConnected || !isInitialized || isPending}
            />
            <Button
              type="submit"
              disabled={
                !isConnected || !isInitialized || !input.trim() || isPending
              }
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>

          <div className="bg-muted/50 space-y-2 rounded-md p-3 text-xs">
            <div>
              <p className="font-medium">How x402 Protocol Works (Demo):</p>
              <p className="text-muted-foreground mt-1">
                1. Initialize your wallet (simulated payment)
                <br />
                2. Ask a question - Agent responds with "402 Payment Required"
                <br />
                3. Payment is simulated ({perRequestAmount} ETH)
                <br />
                4. Agent verifies and provides response
                <br />
                5. Each interaction follows this micropayment flow
              </p>
            </div>
            <div>
              <p className="font-medium">Visual Demo:</p>
              <p className="text-muted-foreground mt-1">
                This is a UI demonstration. All payments and transactions are
                simulated for display purposes only. Actual blockchain
                integration is separate from the visual components.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
