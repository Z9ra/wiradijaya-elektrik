import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map"

export default function MapMarkerTooltip() {
  const landmarks = [
    {
      name: "Golden Gate Bridge",
      longitude: -122.4783,
      latitude: 37.8199,
    },
    {
      name: "Alcatraz Island",
      longitude: -122.423,
      latitude: 37.8267,
    },
    {
      name: "Ferry Building",
      longitude: -122.3933,
      latitude: 37.7956,
    },
  ]

  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map center={[-122.4194, 37.7749]} zoom={12}>
        {landmarks.map((landmark) => (
          <MapMarker
            key={landmark.name}
            longitude={landmark.longitude}
            latitude={landmark.latitude}
          >
            <MarkerContent>
              <div className="bg-primary border-background ring-primary/20 size-5 rounded-full border-2 shadow-md ring-2" />
            </MarkerContent>
            <MarkerTooltip>{landmark.name}</MarkerTooltip>
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
