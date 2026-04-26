import { Box, ChevronRight, FileText, MousePointer } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbCustomStyles() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-0.5">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground flex items-center gap-1.5 rounded px-2 py-1 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Docs
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 stroke-2" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground flex items-center gap-1.5 rounded px-2 py-1 transition-colors"
          >
            <Box className="h-4 w-4" />
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4 stroke-2" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground flex items-center gap-1.5 rounded px-2 py-1 transition-colors"
          >
            <MousePointer className="h-4 w-4" />
            Breadcrumb
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
