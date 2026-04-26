"use client"

import {
  Calculator,
  Folder,
  Gem,
  LayoutDashboard,
  Package,
  Settings,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function CryptoSidebar() {
  const trendingCryptos = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$46,727.54",
      change: "+2.92%",
      icon: "https://v3.material-tailwind.com/icon/bitcoin.svg",
      positive: true,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$4,307.22",
      change: "+1.02%",
      icon: "https://v3.material-tailwind.com/icon/eth.svg",
      positive: true,
    },
    {
      symbol: "USDT",
      name: "TetherUS",
      price: "$1,846.11",
      change: "+2.92%",
      icon: "https://v3.material-tailwind.com/icon/usdt.svg",
      positive: true,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$183.73",
      change: "-0.12%",
      icon: "https://v3.material-tailwind.com/icon/solana.svg",
      positive: false,
    },
  ]

  return (
    <div className="bg-background h-screen w-full max-w-xs overflow-y-scroll rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-3 border-b pb-4">
          <div className="bg-muted rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <p className="text-xl font-semibold">Creative Tim UI</p>
        </div>
      </div>

      <div className="space-y-4 px-6 pb-6">
        <Tabs defaultValue="staking" className="w-full">
          <TabsList className="border-border h-auto w-full rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="staking"
              className="data-[state=active]:border-foreground flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
            >
              Staking
            </TabsTrigger>
            <TabsTrigger
              value="fixedYield"
              className="data-[state=active]:border-foreground flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
            >
              Fixed Yield
            </TabsTrigger>
          </TabsList>

          <TabsContent value="staking" className="mt-4">
            <div className="space-y-6">
              <div>
                <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
                  Main
                </small>
                <ul className="flex min-w-60 flex-col gap-0.5">
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <LayoutDashboard className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Overview</span>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <Folder className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Portfolio</span>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <Package className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Yield Providers</span>
                    <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                      <Badge
                        variant="destructive"
                        className="border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      >
                        14
                      </Badge>
                    </span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
                  Wallet
                </small>
                <ul className="flex min-w-60 flex-col gap-0.5">
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <Calculator className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Rewards Calculator</span>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <Gem className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Market Data</span>
                  </li>
                  <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
                    <span className="mr-2.5 grid shrink-0 place-items-center">
                      <Settings className="h-5 w-5" />
                    </span>
                    <span className="font-medium">Investments</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
                  Trending
                </small>
                <ul className="flex min-w-60 flex-col gap-1">
                  {trendingCryptos.map((crypto) => (
                    <li
                      key={crypto.symbol}
                      className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors"
                    >
                      <Card className="bg-muted mr-2.5 grid h-10 w-10 shrink-0 place-items-center border">
                        <img
                          src={crypto.icon}
                          alt={crypto.name}
                          className="h-6 w-6"
                        />
                      </Card>
                      <div className="flex-1 space-y-0.5">
                        <small className="text-foreground block text-sm font-semibold">
                          {crypto.symbol}
                        </small>
                        <small className="text-muted-foreground block text-xs">
                          {crypto.name}
                        </small>
                      </div>
                      <span className="ml-auto block shrink-0 space-y-0.5 pl-2.5 text-end">
                        <small className="text-foreground block text-sm font-semibold">
                          {crypto.price}
                        </small>
                        <div
                          className={`flex items-center justify-end gap-1 text-xs font-semibold ${crypto.positive ? "text-green-500" : "text-red-500"}`}
                        >
                          {crypto.positive ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          <span>{crypto.change}</span>
                        </div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fixedYield" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Fixed Yield content goes here.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
