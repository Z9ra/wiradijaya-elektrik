"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Map, MapMarker, MarkerContent } from "@/components/ui/map"

export default function MapMarkerDraggable() {
  const [coords, setCoords] = React.useState<[number, number]>([
    -122.4194, 37.7749,
  ])
  const [isDragging, setIsDragging] = React.useState(false)

  const handleDragEnd = (lngLat: { lng: number; lat: number }) => {
    setCoords([lngLat.lng, lngLat.lat])
    setIsDragging(false)
    console.log("Marker moved to:", lngLat)
  }

  const resetPosition = () => {
    setCoords([-122.4194, 37.7749])
  }

  return (
    <div className="space-y-3">
      <div className="h-[400px] w-full overflow-hidden rounded-lg border">
        <Map center={coords} zoom={12}>
          <MapMarker
            longitude={coords[0]}
            latitude={coords[1]}
            draggable
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            <MarkerContent>
              <div
                className={`bg-primary size-5 rounded-lg border-2 border-white shadow-lg transition-transform ${
                  isDragging ? "scale-125" : ""
                }`}
              />
            </MarkerContent>
          </MapMarker>
        </Map>
      </div>

      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-1">
          <p className="text-sm font-medium">Current Position</p>
          <p className="text-muted-foreground font-mono text-xs">
            Lng: {coords[0].toFixed(4)}, Lat: {coords[1].toFixed(4)}
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={resetPosition}>
          Reset Position
        </Button>
      </div>
    </div>
  )
}
