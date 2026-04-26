import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertIcon() {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>A simple alert for showing message.</AlertDescription>
    </Alert>
  )
}
