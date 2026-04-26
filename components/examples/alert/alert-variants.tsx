import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertVariants() {
  return (
    <div className="w-full space-y-2">
      <Alert className="border-none bg-transparent shadow-none">
        <AlertDescription>
          A simple alert for showing message, with variant="ghost"
        </AlertDescription>
      </Alert>
      <Alert className="bg-transparent">
        <AlertDescription>
          A simple alert for showing message. with variant="outline"
        </AlertDescription>
      </Alert>
      <Alert className="bg-primary text-primary-foreground border-primary">
        <AlertDescription>
          A simple alert for showing message. with variant="solid"
        </AlertDescription>
      </Alert>
      <Alert className="from-primary to-primary/80 text-primary-foreground border-primary bg-gradient-to-r">
        <AlertDescription>
          A simple alert for showing message. with variant="gradient"
        </AlertDescription>
      </Alert>
    </div>
  )
}
