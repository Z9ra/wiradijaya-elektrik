"use client"

import * as React from "react"
import {
  Check,
  Copy,
  Globe,
  Languages,
  Loader2,
  Mic,
  RotateCcw,
  Square,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "zh", label: "Chinese" },
  { value: "ja", label: "Japanese" },
  { value: "pt", label: "Portuguese" },
]

const MOCK_TRANSCRIPTION =
  "Welcome to the AI voice transcription demo. This is a simulated transcription result showing how the interface handles real-time voice input. The system supports multiple languages and can translate your transcription to any supported language."

const MOCK_TRANSLATIONS: Record<string, string> = {
  es: "Bienvenido a la demostración de transcripción de voz con IA. Este es un resultado de transcripción simulado que muestra cómo la interfaz maneja la entrada de voz en tiempo real.",
  fr: "Bienvenue dans la démo de transcription vocale par IA. Ceci est un résultat de transcription simulé montrant comment l'interface gère les entrées vocales en temps réel.",
  de: "Willkommen bei der KI-Sprachtranskriptions-Demo. Dies ist ein simuliertes Transkriptionsergebnis, das zeigt, wie die Schnittstelle Spracheingaben in Echtzeit verarbeitet.",
  zh: "欢迎使用AI语音转录演示。这是一个模拟的转录结果，显示了界面如何实时处理语音输入。",
  ja: "AI音声文字起こしデモへようこそ。これは、インターフェースがリアルタイムの音声入力をどのように処理するかを示すシミュレートされた文字起こし結果です。",
  pt: "Bem-vindo à demonstração de transcrição de voz por IA. Este é um resultado de transcrição simulado mostrando como a interface lida com entrada de voz em tempo real.",
}

const BAR_COUNT = 7

export default function AiVoiceTranscription01() {
  const [isRecording, setIsRecording] = React.useState(false)
  const [isTranscribing, setIsTranscribing] = React.useState(false)
  const [transcription, setTranscription] = React.useState("")
  const [language, setLanguage] = React.useState("en")
  const [targetLang, setTargetLang] = React.useState("es")
  const [elapsed, setElapsed] = React.useState(0)
  const [bars, setBars] = React.useState<number[]>(Array(BAR_COUNT).fill(20))
  const [copied, setCopied] = React.useState(false)
  const [isTranslating, setIsTranslating] = React.useState(false)
  const [translation, setTranslation] = React.useState("")

  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null)
  const transcribeTimeoutRef = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null)

  // Animate bars
  React.useEffect(() => {
    if (!isRecording) {
      setBars(Array(BAR_COUNT).fill(20))
      return
    }
    const interval = setInterval(() => {
      setBars(Array.from({ length: BAR_COUNT }, () => Math.random() * 70 + 15))
    }, 100)
    return () => clearInterval(interval)
  }, [isRecording])

  // Timer
  React.useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRecording])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  const startRecording = () => {
    setIsRecording(true)
    setElapsed(0)
    setTranscription("")
    setTranslation("")
    // Auto-stop after 4 seconds and transcribe
    transcribeTimeoutRef.current = setTimeout(() => {
      stopRecording()
    }, 4000)
  }

  const stopRecording = () => {
    setIsRecording(false)
    if (transcribeTimeoutRef.current) clearTimeout(transcribeTimeoutRef.current)
    setIsTranscribing(true)
    setTimeout(() => {
      setTranscription(MOCK_TRANSCRIPTION)
      setIsTranscribing(false)
    }, 1500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(transcription)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    setTranscription("")
    setTranslation("")
    setElapsed(0)
  }

  const handleTranslate = async () => {
    setIsTranslating(true)
    setTranslation("")
    await new Promise((r) => setTimeout(r, 1000))
    setTranslation(
      MOCK_TRANSLATIONS[targetLang] ??
        "Translation not available for selected language in demo."
    )
    setIsTranslating(false)
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-orange-500" />
            Voice Transcription
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language selector */}
          <div className="flex items-center gap-3">
            <Globe className="text-muted-foreground h-4 w-4 shrink-0" />
            <div className="flex-1 space-y-1">
              <Label className="text-sm">Source Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((l) => (
                    <SelectItem key={l.value} value={l.value}>
                      {l.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Microphone button */}
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="relative">
              {isRecording && (
                <>
                  <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-30" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-20 [animation-delay:300ms]" />
                </>
              )}
              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isTranscribing}
                className={`relative flex h-20 w-20 items-center justify-center rounded-full border-4 transition-all duration-200 ${
                  isRecording
                    ? "border-red-400 bg-red-50 text-red-500 shadow-lg dark:border-red-500 dark:bg-red-950/50 dark:text-red-400"
                    : "border-orange-300 bg-orange-50 text-orange-600 hover:bg-orange-100 dark:border-orange-700 dark:bg-orange-950/50 dark:text-orange-400 dark:hover:bg-orange-900/50"
                } disabled:cursor-not-allowed disabled:opacity-50`}
              >
                {isRecording ? (
                  <Square className="h-7 w-7 fill-current" />
                ) : (
                  <Mic className="h-7 w-7" />
                )}
              </button>
            </div>

            {/* Status */}
            <div className="text-center">
              {isRecording && (
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">
                    Recording {formatTime(elapsed)}
                  </span>
                </div>
              )}
              {isTranscribing && (
                <div className="flex items-center gap-2 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                  <span className="text-muted-foreground">Transcribing...</span>
                </div>
              )}
              {!isRecording && !isTranscribing && !transcription && (
                <p className="text-muted-foreground text-sm">
                  Click to start recording
                </p>
              )}
            </div>

            {/* Audio level bars */}
            <div className="flex h-10 items-end gap-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={`w-3 rounded-t-sm transition-all duration-75 ${isRecording ? "bg-orange-400" : "bg-orange-200 dark:bg-orange-900/50"}`}
                  style={{ height: `${isRecording ? h : 20}%` }}
                />
              ))}
            </div>
          </div>

          <Separator />

          {/* Transcription output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Transcription</Label>
              {transcription && (
                <Badge variant="outline" className="text-xs">
                  {transcription.split(" ").length} words
                </Badge>
              )}
            </div>
            <Textarea
              value={transcription}
              readOnly
              placeholder="Transcription will appear here..."
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Action buttons */}
          {transcription && (
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" onClick={handleCopy}>
                {copied ? (
                  <Check className="mr-1.5 h-3.5 w-3.5" />
                ) : (
                  <Copy className="mr-1.5 h-3.5 w-3.5" />
                )}
                {copied ? "Copied" : "Copy"}
              </Button>
              <Button size="sm" variant="outline" onClick={handleClear}>
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
                Clear
              </Button>
              <div className="flex items-center gap-1.5">
                <Select value={targetLang} onValueChange={setTargetLang}>
                  <SelectTrigger className="h-8 w-32 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.filter((l) => l.value !== language).map((l) => (
                      <SelectItem key={l.value} value={l.value}>
                        {l.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleTranslate}
                  disabled={isTranslating}
                >
                  {isTranslating ? (
                    <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Languages className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  Translate
                </Button>
              </div>
            </div>
          )}

          {/* Translation */}
          {translation && (
            <div className="space-y-2">
              <Label className="text-sm">
                Translation (
                {LANGUAGES.find((l) => l.value === targetLang)?.label})
              </Label>
              <Textarea
                value={translation}
                readOnly
                rows={3}
                className="bg-muted/30 resize-none text-sm"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
