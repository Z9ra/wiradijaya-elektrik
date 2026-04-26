import { CheckCircle } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertCustomStyles() {
  return (
    <Alert className="rounded-none border-t-0 border-r-0 border-b-0 border-l-4 border-green-500 bg-green-500/10 font-medium text-green-500">
      <CheckCircle className="h-4 w-4" />
      <AlertDescription>A simple alert for showing message.</AlertDescription>
    </Alert>
  )
}
