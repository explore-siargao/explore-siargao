import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideChevronsLeft,
  LucideChevronsRight,
} from "lucide-react"
import React from "react"

interface PaginationProps {
  pageIndex: number
  pageCount: number
  canPreviousPage: boolean
  canNextPage: boolean
  onPageChange: (pageIndex: number) => void
  onFirstPage: () => void
  onLastPage: () => void
  onPreviousPage: () => void
  onNextPage: () => void
  pageSize: number
  onPageSizeChange: (pageSize: number) => void
}

const Pagination = ({
  pageIndex,
  pageCount,
  canPreviousPage,
  canNextPage,
  onPageChange,
  onFirstPage,
  onLastPage,
  onPreviousPage,
  onNextPage,
  pageSize,
  onPageSizeChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        className="border rounded p-1"
        onClick={onFirstPage}
        disabled={!canPreviousPage}
      >
        {<LucideChevronsLeft />}
      </button>
      <button
        className="border rounded p-1"
        onClick={onPreviousPage}
        disabled={!canPreviousPage}
      >
        {<LucideChevronLeft />}
      </button>
      <button
        className="border rounded p-1"
        onClick={onNextPage}
        disabled={!canNextPage}
      >
        {<LucideChevronRight />}
      </button>
      <button
        className="border rounded p-1"
        onClick={onLastPage}
        disabled={!canNextPage}
      >
        {<LucideChevronsRight />}
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {pageIndex + 1} of {pageCount}
        </strong>
      </span>
    </div>
  )
}

export default Pagination
