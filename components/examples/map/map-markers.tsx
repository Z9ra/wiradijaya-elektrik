import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map"

export default function MapMarkers() {
  // San Francisco landmarks
  const landmarks = [
    {
      id: 1,
      name: "Golden Gate Bridge",
      longitude: -122.4783,
      latitude: 37.8199,
    },
    {
      id: 2,
      name: "Alcatraz Island",
      longitude: -122.423,
      latitude: 37.8267,
    },
    {
      id: 3,
      name: "Ferry Building",
      longitude: -122.3933,
      latitude: 37.7956,
    },
    {
      id: 4,
      name: "Coit Tower",
      longitude: -122.4058,
      latitude: 37.8024,
    },
  ]

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map center={[-122.4194, 37.7749]} zoom={12}>
        {landmarks.map((landmark) => (
          <MapMarker
            key={landmark.id}
            longitude={landmark.longitude}
            latitude={landmark.latitude}
          >
            <MarkerContent>
              <div className="bg-primary border-background ring-primary/20 size-3.5 rounded-full border-2 shadow-md ring-2" />
            </MarkerContent>
            <MarkerTooltip>
              <div className="font-medium">{landmark.name}</div>
            </MarkerTooltip>
            <MarkerPopup>
              <div className="space-y-1.5">
                <p className="text-foreground font-semibold">{landmark.name}</p>
                <p className="text-muted-foreground text-xs">
                  Coordinates: {landmark.latitude.toFixed(4)},{" "}
                  {landmark.longitude.toFixed(4)}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
