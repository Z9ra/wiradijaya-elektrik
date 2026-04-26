import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AlertWithList() {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert className="border-none bg-transparent shadow-none">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <div className="mt-0.5">
            <p className="mb-1 font-bold">
              Ensure that these requirements are met:
            </p>
            <ul className="mt-2 ml-2 list-inside list-disc space-y-1 text-sm">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      <Alert className="bg-transparent">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <div className="mt-0.5">
            <p className="mb-1 font-bold">
              Ensure that these requirements are met:
            </p>
            <ul className="mt-2 ml-2 list-inside list-disc space-y-1 text-sm">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      <Alert className="bg-primary text-primary-foreground border-primary">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <div className="mt-0.5">
            <p className="mb-1 font-bold">
              Ensure that these requirements are met:
            </p>
            <ul className="mt-2 ml-2 list-inside list-disc space-y-1 text-sm">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      <Alert className="from-primary to-primary/80 text-primary-foreground border-primary bg-gradient-to-r">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <div className="mt-0.5">
            <p className="mb-1 font-bold">
              Ensure that these requirements are met:
            </p>
            <ul className="mt-2 ml-2 list-inside list-disc space-y-1 text-sm">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}
