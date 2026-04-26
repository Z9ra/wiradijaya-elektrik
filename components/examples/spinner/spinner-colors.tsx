import { Spinner } from "@/components/ui/spinner"

export default function SpinnerColors() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="text-blue-500" />
      <Spinner className="text-purple-500" />
      <Spinner className="text-cyan-500" />
      <Spinner className="text-green-500" />
      <Spinner className="text-yellow-500" />
      <Spinner className="text-red-500" />
    </div>
  )
}
