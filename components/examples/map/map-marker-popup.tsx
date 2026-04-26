import { Button } from "@/components/ui/button"
import { Map, MapMarker, MarkerContent, MarkerPopup } from "@/components/ui/map"

export default function MapMarkerPopup() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map center={[-122.4783, 37.8199]} zoom={13}>
        <MapMarker longitude={-122.4783} latitude={37.8199}>
          <MarkerContent>
            <div className="bg-primary border-background ring-primary/20 size-3.5 rounded-full border-2 shadow-md ring-2" />
          </MarkerContent>
          <MarkerPopup closeButton>
            <div className="space-y-2">
              <h3 className="font-semibold">Golden Gate Bridge</h3>
              <p className="text-muted-foreground text-xs">
                Iconic suspension bridge spanning the Golden Gate strait
              </p>
              <Button size="sm" className="w-full">
                Get Directions
              </Button>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  )
}
