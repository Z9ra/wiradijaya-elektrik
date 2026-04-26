"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const TOTAL_PAGES = 10

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = React.useState(2)

  const pages = React.useMemo(() => {
    const base = new Set<number>([1, TOTAL_PAGES])
    for (let delta = -1; delta <= 1; delta += 1) {
      const candidate = currentPage + delta
      if (candidate > 1 && candidate < TOTAL_PAGES) {
        base.add(candidate)
      }
    }

    return Array.from(base).sort((a, b) => a - b)
  }, [currentPage])

  const goToPage = React.useCallback(
    (page: number) => {
      setCurrentPage(Math.min(Math.max(page, 1), TOTAL_PAGES))
    },
    [setCurrentPage]
  )

  const renderPageItems = () => {
    const items: React.ReactNode[] = []
    let lastPage: number | null = null

    pages.forEach((page) => {
      if (lastPage !== null && page - lastPage > 1) {
        items.push(
          <PaginationItem key={`ellipsis-${page}`}>
            <PaginationEllipsis />
          </PaginationItem>
        )
      }

      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={page === currentPage}
            onClick={(event) => {
              event.preventDefault()
              goToPage(page)
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      )

      lastPage = page
    })

    return items
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === TOTAL_PAGES

  return (
    <Pagination className="justify-start md:justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className={cn(isFirstPage && "pointer-events-none opacity-40")}
            aria-disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : undefined}
            onClick={(event) => {
              event.preventDefault()
              if (!isFirstPage) {
                goToPage(currentPage - 1)
              }
            }}
          />
        </PaginationItem>
        {renderPageItems()}
        <PaginationItem>
          <PaginationNext
            href="#"
            className={cn(isLastPage && "pointer-events-none opacity-40")}
            aria-disabled={isLastPage}
            tabIndex={isLastPage ? -1 : undefined}
            onClick={(event) => {
              event.preventDefault()
              if (!isLastPage) {
                goToPage(currentPage + 1)
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
