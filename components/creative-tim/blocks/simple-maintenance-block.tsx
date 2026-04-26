import { AlertTriangle } from "lucide-react"

export default function SimpleMaintenanceBlock() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-14 w-14 text-orange-500" />
          <h2 className="my-6 text-2xl font-bold md:text-3xl lg:text-4xl">
            System Upgrade in Progress
          </h2>
          <p className="text-base [text-wrap:balance] text-slate-600 md:text-lg">
            Our team of administrators is currently conducting scheduled
            maintenance.
          </p>
        </div>
      </div>
    </section>
  )
}
