import { Map } from "@/components/ui/map"

export default function MapDemo() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg border">
      <Map center={[-122.4194, 37.7749]} zoom={12} />
    </div>
  )
}
