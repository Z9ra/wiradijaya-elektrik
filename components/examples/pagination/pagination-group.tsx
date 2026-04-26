import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationGroup() {
  return (
    <Pagination className="justify-start md:justify-center">
      <PaginationContent className="bg-background overflow-hidden rounded-lg border shadow-sm">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="rounded-none border-r px-5 text-sm font-medium"
          />
        </PaginationItem>
        {[1, 2, 3, 4, 5].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              className="rounded-none border-x px-5 text-sm font-semibold"
              isActive={page === 3}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="rounded-none border-l px-5 text-sm font-medium"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
