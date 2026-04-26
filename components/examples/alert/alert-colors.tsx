import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertColors() {
  return (
    <div className="w-full space-y-2">
      <Alert className="border-primary bg-primary/10 text-primary [&>svg]:text-primary">
        <AlertDescription>
          A simple alert for showing message, with color="primary"
        </AlertDescription>
      </Alert>
      <Alert className="border-secondary bg-secondary/10 text-secondary [&>svg]:text-secondary">
        <AlertDescription>
          A simple alert for showing message, with color="secondary"
        </AlertDescription>
      </Alert>
      <Alert className="border-blue-500 bg-blue-500/10 text-blue-500 [&>svg]:text-blue-500">
        <AlertDescription>
          A simple alert for showing message, with color="info"
        </AlertDescription>
      </Alert>
      <Alert className="border-green-500 bg-green-500/10 text-green-500 [&>svg]:text-green-500">
        <AlertDescription>
          A simple alert for showing message, with color="success"
        </AlertDescription>
      </Alert>
      <Alert className="border-yellow-500 bg-yellow-500/10 text-yellow-500 [&>svg]:text-yellow-500">
        <AlertDescription>
          A simple alert for showing message, with color="warning"
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertDescription>
          A simple alert for showing message, with color="error"
        </AlertDescription>
      </Alert>
    </div>
  )
}
