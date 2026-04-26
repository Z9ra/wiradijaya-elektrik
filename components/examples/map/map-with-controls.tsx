"use client"

import { Map, MapControls } from "@/components/ui/map"

export default function MapWithControls() {
  const handleLocate = (coords: { lng: number; lat: number }) => {
    console.log("User location:", coords)
    // Custom behavior: could show a marker, save to state, etc.
  }

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map center={[-122.4194, 37.7749]} zoom={12}>
        <MapControls
          position="bottom-right"
          showZoom
          showCompass
          showLocate
          showFullscreen
          onLocate={handleLocate}
        />
      </Map>
    </div>
  )
}
