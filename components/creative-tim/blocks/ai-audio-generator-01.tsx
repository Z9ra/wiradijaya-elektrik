"use client"

import * as React from "react"
import {
  Download,
  Loader2,
  Music,
  Pause,
  Play,
  RefreshCw,
  Volume2,
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
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const VOICES = [
  { value: "alloy", label: "Alloy (Neutral)" },
  { value: "echo", label: "Echo (Male)" },
  { value: "fable", label: "Fable (British)" },
  { value: "onyx", label: "Onyx (Deep)" },
  { value: "nova", label: "Nova (Female)" },
  { value: "shimmer", label: "Shimmer (Soft)" },
]

const MUSIC_STYLES = [
  { value: "ambient", label: "Ambient" },
  { value: "cinematic", label: "Cinematic" },
  { value: "electronic", label: "Electronic" },
  { value: "jazz", label: "Jazz" },
  { value: "classical", label: "Classical" },
  { value: "lofi", label: "Lo-Fi Hip Hop" },
]

const BAR_COUNT = 40

export default function AiAudioGenerator01() {
  const [mode, setMode] = React.useState("tts")
  const [prompt, setPrompt] = React.useState(
    "Welcome to our AI-powered platform. We're excited to help you build amazing products."
  )
  const [voice, setVoice] = React.useState("nova")
  const [musicStyle, setMusicStyle] = React.useState("ambient")
  const [duration, setDuration] = React.useState([30])
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [isGenerated, setIsGenerated] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [playProgress, setPlayProgress] = React.useState(0)
  const [bars, setBars] = React.useState<number[]>(
    Array.from({ length: BAR_COUNT }, () => Math.random() * 60 + 10)
  )

  // Animate waveform bars
  React.useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setBars(Array.from({ length: BAR_COUNT }, () => Math.random() * 60 + 10))
    }, 80)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Simulate playback progress
  React.useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setPlayProgress((p) => {
        if (p >= 100) {
          setIsPlaying(false)
          return 0
        }
        return p + 1
      })
    }, 300)
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleGenerate = async () => {
    setIsGenerating(true)
    setIsGenerated(false)
    setProgress(0)
    setIsPlaying(false)
    setPlayProgress(0)
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 150))
      setProgress(i)
    }
    setIsGenerating(false)
    setIsGenerated(true)
  }

  const totalSeconds = duration[0]
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  const durationLabel = `${mins}:${secs.toString().padStart(2, "0")}`

  const playedSeconds = Math.round((playProgress / 100) * totalSeconds)
  const playedMins = Math.floor(playedSeconds / 60)
  const playedSecs = playedSeconds % 60
  const playedLabel = `${playedMins}:${playedSecs.toString().padStart(2, "0")}`

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5 text-orange-500" />
            AI Audio Generator
            <Badge variant="secondary" className="ml-auto text-xs">
              Beta
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs value={mode} onValueChange={setMode}>
            <TabsList className="w-full">
              <TabsTrigger value="tts" className="flex-1">
                Text to Speech
              </TabsTrigger>
              <TabsTrigger value="music" className="flex-1">
                Music Generation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tts" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Text to speak</Label>
                <Textarea
                  placeholder="Enter text to convert to speech..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
                <p className="text-muted-foreground text-right text-xs">
                  {prompt.length} characters
                </p>
              </div>
              <div className="space-y-2">
                <Label>Voice</Label>
                <Select value={voice} onValueChange={setVoice}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {VOICES.map((v) => (
                      <SelectItem key={v.value} value={v.value}>
                        {v.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="music" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Music prompt</Label>
                <Textarea
                  placeholder="Describe the music you want to generate..."
                  rows={3}
                  className="resize-none"
                  defaultValue="Calm ambient background music with soft piano and gentle synth pads, suitable for a productivity app."
                />
              </div>
              <div className="space-y-2">
                <Label>Style</Label>
                <Select value={musicStyle} onValueChange={setMusicStyle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {MUSIC_STYLES.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>

          {/* Duration slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Duration</Label>
              <span className="text-muted-foreground text-sm font-medium">
                {durationLabel}
              </span>
            </div>
            <Slider
              value={duration}
              onValueChange={setDuration}
              min={5}
              max={120}
              step={5}
              className="w-full"
            />
          </div>

          {/* Generate button */}
          <Button
            className="w-full"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Music className="mr-2 h-4 w-4" />
                Generate Audio
              </>
            )}
          </Button>

          {/* Progress bar */}
          {isGenerating && (
            <div className="space-y-1">
              <Progress value={progress} className="h-2" />
              <p className="text-muted-foreground text-center text-xs">
                Processing audio... {progress}%
              </p>
            </div>
          )}

          {/* Waveform + player */}
          {isGenerated && (
            <div className="space-y-3 rounded-xl border bg-gradient-to-br from-orange-50 to-orange-50 p-4 dark:from-orange-950/30 dark:to-orange-950/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="text-muted-foreground h-4 w-4" />
                  <span className="text-sm font-medium">
                    {mode === "tts"
                      ? `${VOICES.find((v) => v.value === voice)?.label}`
                      : `${MUSIC_STYLES.find((s) => s.value === musicStyle)?.label}`}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {durationLabel}
                </Badge>
              </div>

              {/* Waveform visualization */}
              <div className="flex h-16 items-end gap-px">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-75"
                    style={{
                      height: `${isPlaying ? h : 30}%`,
                      backgroundColor:
                        (i / BAR_COUNT) * 100 <= playProgress
                          ? "rgb(139 92 246)"
                          : "rgb(196 181 253)",
                    }}
                  />
                ))}
              </div>

              {/* Player controls */}
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full"
                  onClick={() => setIsPlaying((p) => !p)}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Progress value={playProgress} className="h-1.5 flex-1" />
                <span className="text-muted-foreground min-w-20 text-right text-xs">
                  {playedLabel} / {durationLabel}
                </span>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <RefreshCw className="h-3.5 w-3.5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Download className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
