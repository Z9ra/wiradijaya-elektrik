"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChevronRight, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardFooter } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export default function KpiCardsWithChartAndCta() {
  const [date, setDate] = React.useState<Date>()
  const revenueChartRef = useRef<HTMLCanvasElement>(null)
  const clicksChartRef = useRef<HTMLCanvasElement>(null)
  const audienceChartRef = useRef<HTMLCanvasElement>(null)
  const timeChartRef = useRef<HTMLCanvasElement>(null)

  const [revenueTooltip, setRevenueTooltip] = useState<{
    x: number
    y: number
    value: string
  } | null>(null)
  const [clicksTooltip, setClicksTooltip] = useState<{
    x: number
    y: number
    value: string
  } | null>(null)
  const [audienceTooltip, setAudienceTooltip] = useState<{
    x: number
    y: number
    value: string
  } | null>(null)
  const [timeTooltip, setTimeTooltip] = useState<{
    x: number
    y: number
    value: string
  } | null>(null)

  useEffect(() => {
    const createChart = (
      canvas: HTMLCanvasElement | null,
      data: number[],
      color: string,
      setTooltip: (
        tooltip: { x: number; y: number; value: string } | null
      ) => void,
      formatter?: (value: number) => string
    ) => {
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const width = canvas.width
      const height = canvas.height

      const max = Math.max(...data)
      const min = Math.min(...data)
      const range = max - min
      const points = data.map((value, index) => ({
        x: (width / (data.length - 1)) * index,
        y: height - ((value - min) / range) * height,
        value: value,
      }))

      const draw = (hoverIndex?: number) => {
        ctx.clearRect(0, 0, width, height)

        // Draw line
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)

        for (let i = 1; i < points.length; i++) {
          const xc = (points[i].x + points[i - 1].x) / 2
          const yc = (points[i].y + points[i - 1].y) / 2
          ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc)
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y)
        ctx.stroke()

        // Draw gradient fill
        ctx.globalAlpha = 0.15
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fillStyle = color
        ctx.fill()

        // Draw data points
        ctx.globalAlpha = 1
        points.forEach((point, index) => {
          ctx.beginPath()
          ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI)
          ctx.fillStyle = hoverIndex === index ? color : "transparent"
          ctx.fill()
          if (hoverIndex === index) {
            ctx.strokeStyle = "#ffffff"
            ctx.lineWidth = 2
            ctx.stroke()
          }
        })
      }

      draw()

      // Add hover functionality
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        let closestIndex = -1
        let closestDistance = Infinity

        points.forEach((point, index) => {
          const distance = Math.sqrt(
            Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)
          )
          if (distance < 20 && distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        if (closestIndex !== -1) {
          const point = points[closestIndex]
          draw(closestIndex)
          canvas.style.cursor = "pointer"
          setTooltip({
            x: point.x,
            y: point.y,
            value: formatter
              ? formatter(point.value)
              : point.value.toLocaleString(),
          })
        } else {
          draw()
          canvas.style.cursor = "default"
          setTooltip(null)
        }
      }

      const handleMouseLeave = () => {
        draw()
        canvas.style.cursor = "default"
        setTooltip(null)
      }

      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    const resizeCanvas = (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas(revenueChartRef.current)
    resizeCanvas(clicksChartRef.current)
    resizeCanvas(audienceChartRef.current)
    resizeCanvas(timeChartRef.current)

    const cleanup1 = createChart(
      revenueChartRef.current,
      [8000, 12000, 15000, 20000, 30000, 40000, 50000],
      "#6b7280",
      setRevenueTooltip,
      (value) => `$${(value / 1000).toFixed(1)}k`
    )
    const cleanup2 = createChart(
      clicksChartRef.current,
      [1000, 2000, 4000, 7000, 8000, 9000, 10000],
      "#6b7280",
      setClicksTooltip,
      (value) => value.toLocaleString()
    )
    const cleanup3 = createChart(
      audienceChartRef.current,
      [20000, 22000, 21000, 19000, 18000, 17000, 16000],
      "#6b7280",
      setAudienceTooltip,
      (value) => value.toLocaleString()
    )
    const cleanup4 = createChart(
      timeChartRef.current,
      [20, 25, 30, 28, 35, 40, 45],
      "#6b7280",
      setTimeTooltip,
      (value) => `${value}s`
    )

    return () => {
      cleanup1?.()
      cleanup2?.()
      cleanup3?.()
      cleanup4?.()
    }
  }, [])

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-xl font-semibold">Reports Snapshot</p>
          <p className="text-muted-foreground text-sm">
            Track key metrics with visual trends to understand performance over
            time.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal sm:w-60"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline" className="w-full gap-2 sm:w-auto">
            <FileText className="h-4 w-4" />
            View Report
          </Button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Revenue
              </p>
              <div className="rounded-lg bg-green-500/10 px-2 py-1">
                <span className="text-xs font-semibold text-green-500">
                  +20%
                </span>
              </div>
            </div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              $50,846.90
            </p>
          </div>
          <div className="relative h-24 px-4 pb-4">
            <canvas ref={revenueChartRef} className="h-full w-full"></canvas>
            {revenueTooltip && (
              <div
                className="bg-foreground text-background pointer-events-none absolute rounded-md px-2 py-1 text-xs font-semibold shadow-lg"
                style={{
                  left: `${revenueTooltip.x}px`,
                  top: `${revenueTooltip.y - 30}px`,
                  transform: "translateX(-50%)",
                }}
              >
                {revenueTooltip.value}
              </div>
            )}
          </div>
          <Separator />
          <CardFooter className="bg-muted/20 flex items-center gap-1.5 p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              See more details
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Outbound Clicks
              </p>
              <div className="rounded-lg bg-green-500/10 px-2 py-1">
                <span className="text-xs font-semibold text-green-500">
                  +10%
                </span>
              </div>
            </div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">10,864</p>
          </div>
          <div className="relative h-24 px-4 pb-4">
            <canvas ref={clicksChartRef} className="h-full w-full"></canvas>
            {clicksTooltip && (
              <div
                className="bg-foreground text-background pointer-events-none absolute rounded-md px-2 py-1 text-xs font-semibold shadow-lg"
                style={{
                  left: `${clicksTooltip.x}px`,
                  top: `${clicksTooltip.y - 30}px`,
                  transform: "translateX(-50%)",
                }}
              >
                {clicksTooltip.value}
              </div>
            )}
          </div>
          <Separator />
          <CardFooter className="bg-muted/20 flex items-center gap-1.5 p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              See more details
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Total Audience
              </p>
              <div className="rounded-lg bg-red-500/10 px-2 py-1">
                <span className="text-xs font-semibold text-red-500">-12%</span>
              </div>
            </div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">19,720</p>
          </div>
          <div className="relative h-24 px-4 pb-4">
            <canvas ref={audienceChartRef} className="h-full w-full"></canvas>
            {audienceTooltip && (
              <div
                className="bg-foreground text-background pointer-events-none absolute rounded-md px-2 py-1 text-xs font-semibold shadow-lg"
                style={{
                  left: `${audienceTooltip.x}px`,
                  top: `${audienceTooltip.y - 30}px`,
                  transform: "translateX(-50%)",
                }}
              >
                {audienceTooltip.value}
              </div>
            )}
          </div>
          <Separator />
          <CardFooter className="bg-muted/20 flex items-center gap-1.5 p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              See more details
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm font-semibold">
                Avg. Time
              </p>
              <div className="rounded-lg bg-green-500/10 px-2 py-1">
                <span className="text-xs font-semibold text-green-500">
                  +16
                </span>
              </div>
            </div>
            <p className="text-lg font-bold md:text-xl lg:text-2xl">00:30:14</p>
          </div>
          <div className="relative h-24 px-4 pb-4">
            <canvas ref={timeChartRef} className="h-full w-full"></canvas>
            {timeTooltip && (
              <div
                className="bg-foreground text-background pointer-events-none absolute rounded-md px-2 py-1 text-xs font-semibold shadow-lg"
                style={{
                  left: `${timeTooltip.x}px`,
                  top: `${timeTooltip.y - 30}px`,
                  transform: "translateX(-50%)",
                }}
              >
                {timeTooltip.value}
              </div>
            )}
          </div>
          <Separator />
          <CardFooter className="bg-muted/20 flex items-center gap-1.5 p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              See more details
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
