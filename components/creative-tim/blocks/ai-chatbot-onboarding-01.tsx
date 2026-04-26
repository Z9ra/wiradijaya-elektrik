"use client"

import * as React from "react"
import { Bot, Check, ChevronRight, Loader2, Sparkles, User } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface Step {
  id: number
  question: string
  placeholder: string
  key: string
}

const STEPS: Step[] = [
  {
    id: 1,
    key: "name",
    question: "Hi there! I'm your AI setup assistant. What's your name?",
    placeholder: "e.g. Alex Johnson",
  },
  {
    id: 2,
    key: "useCase",
    question:
      "Great to meet you, {name}! What will you primarily use this AI for?",
    placeholder: "e.g. Customer support, code generation, data analysis...",
  },
  {
    id: 3,
    key: "teamSize",
    question: "Awesome! How large is your team?",
    placeholder: "e.g. Solo, 2-10, 11-50, 50+",
  },
  {
    id: 4,
    key: "model",
    question: "Which AI model do you prefer?",
    placeholder: "e.g. Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro...",
  },
  {
    id: 5,
    key: "apiKey",
    question:
      "Almost done! Enter your API key to connect (or type 'skip' to do this later).",
    placeholder: "sk-... (or 'skip')",
  },
]

const BOT_FOLLOW_UPS: Record<string, string> = {
  name: "Nice to meet you, {name}! Let me ask you a few more questions to personalize your setup.",
  useCase:
    "Perfect choice! AI for {useCase} is incredibly powerful. One more thing...",
  teamSize: "Got it — {teamSize} team. Almost there!",
  model: "{model} is a great pick! One last step...",
  apiKey: "You're all set! Here's a summary of your configuration.",
}

interface ChatMessage {
  id: string
  role: "bot" | "user"
  content: string
}

export default function AiChatbotOnboarding01() {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { id: "0", role: "bot", content: STEPS[0].question },
  ])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [answers, setAnswers] = React.useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  React.useEffect(() => {
    if (!isComplete) inputRef.current?.focus()
  }, [currentStep, isComplete])

  const interpolate = (template: string, data: Record<string, string>) =>
    template.replace(/\{(\w+)\}/g, (_, k) => data[k] ?? `{${k}}`)

  const handleSubmit = async () => {
    if (!inputValue.trim() || isTyping || isComplete) return

    const step = STEPS[currentStep]
    const value = inputValue.trim()
    const newAnswers = { ...answers, [step.key]: value }
    setAnswers(newAnswers)

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: value },
    ])
    setInputValue("")

    const isLastStep = currentStep === STEPS.length - 1

    // Bot typing
    setIsTyping(true)
    await new Promise((r) => setTimeout(r, 900))
    setIsTyping(false)

    // Follow-up or complete
    const followUp = BOT_FOLLOW_UPS[step.key]
    if (followUp) {
      const msg = interpolate(followUp, newAnswers)
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "bot", content: msg },
      ])
    }

    if (isLastStep) {
      setIsComplete(true)
    } else {
      // Add next question
      await new Promise((r) => setTimeout(r, 300))
      const nextStep = STEPS[currentStep + 1]
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "bot",
          content: interpolate(nextStep.question, newAnswers),
        },
      ])
      setCurrentStep((s) => s + 1)
    }
  }

  const progress = isComplete ? 100 : (currentStep / STEPS.length) * 100

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <Bot className="h-5 w-5 text-orange-500" />
              AI Setup Wizard
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Step {Math.min(currentStep + 1, STEPS.length)} of {STEPS.length}
            </Badge>
          </div>
          <div className="space-y-1 pt-1">
            <Progress value={progress} className="h-1.5" />
            <div className="flex justify-between">
              {STEPS.map((s, i) => (
                <div
                  key={s.id}
                  className={`text-xs font-medium ${
                    i < currentStep || isComplete
                      ? "text-emerald-600 dark:text-emerald-400"
                      : i === currentStep
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-muted-foreground"
                  }`}
                >
                  {i < currentStep || isComplete ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    s.id
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-95 px-4" ref={scrollRef}>
            <div className="space-y-3 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <Avatar className="h-7 w-7 shrink-0">
                      <AvatarFallback className="bg-orange-100 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                        AI
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-4/5 rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <Avatar className="h-7 w-7 shrink-0">
                      <AvatarFallback className="text-xs">
                        <User className="h-3.5 w-3.5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <Avatar className="h-7 w-7 shrink-0">
                    <AvatarFallback className="bg-orange-100 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted flex items-center gap-1 rounded-2xl rounded-bl-sm px-3 py-2.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        {!isComplete ? (
          <CardFooter className="flex-col gap-2 pt-3">
            <Separator />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
              className="flex w-full gap-2 pt-1"
            >
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={STEPS[currentStep]?.placeholder}
                disabled={isTyping}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isTyping || !inputValue.trim()}
                size="icon"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        ) : (
          <CardFooter className="flex-col gap-3 pt-3">
            <Separator />
            <div className="w-full space-y-2 rounded-xl bg-orange-50 p-3 text-sm dark:bg-orange-950/40">
              <p className="flex items-center gap-1.5 font-semibold text-orange-700 dark:text-orange-300">
                <Sparkles className="h-3.5 w-3.5" />
                Your Configuration Summary
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {STEPS.map((s) => (
                  <div key={s.key}>
                    <span className="text-muted-foreground capitalize">
                      {s.key}:{" "}
                    </span>
                    <span className="font-medium">
                      {s.key === "apiKey" &&
                      answers[s.key]?.toLowerCase() === "skip"
                        ? "Not configured"
                        : answers[s.key] || "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" />
              Complete Setup
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}
