import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationCircular() {
  return (
    <Pagination className="justify-start md:justify-center">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 rounded-full px-4"
          />
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              className="border-border rounded-full border px-4 py-2 text-sm font-medium"
              isActive={page === 2}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 rounded-full px-4"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
