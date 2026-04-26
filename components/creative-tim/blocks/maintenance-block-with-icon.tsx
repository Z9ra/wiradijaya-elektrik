import { Settings } from "lucide-react"

export default function MaintenanceBlockWithIcon() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <Settings className="mx-auto h-16 w-16 text-orange-500" />
          <h2 className="mx-auto my-6 max-w-xl text-lg font-bold [text-wrap:balance] md:text-xl lg:text-2xl">
            We're currently undergoing maintenance to improve your experience.
          </h2>
          <p className="mx-auto max-w-xl text-base [text-wrap:balance] text-slate-600 md:text-lg">
            Please bear with us while we make these enhancements. We'll be back
            shortly. Thank you for your patience!
          </p>
        </div>
      </div>
    </section>
  )
}
