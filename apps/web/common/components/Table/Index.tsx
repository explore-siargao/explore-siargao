import React, { useMemo } from "react"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import Pagination from "./Pagination"

export interface BookingsData {
  id: number
  listingId: number
  Listing: {
    title: string
    imageKey: string
    address: string
  }
  fromDate: string
  toDate: string
  guestCount: number
  totalFee: number
  transactionId: number
  Transaction: {
    status: string
  }
  createdAt: string
}
interface TableProps {
  data: BookingsData[]
  columns: any[]
}

const Table = ({ data, columns }: TableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table className="w-full table-auto">
        <thead className="text-left">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="pl-4"
                    key={header.id}
                    colSpan={header.colSpan}
                    scope="col"
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        <span>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className=" hover:bg-primary-500 cursor-pointer" key={row.id}>
                {row.getVisibleCells().map((cell, _id) => {
                  let className = "py-2 pl-4 items-center gap-5"
                  if (_id === 0) className += " rounded-l-xl"
                  if (_id === row.getVisibleCells().length - 1)
                    className += " rounded-r-xl"
                  return (
                    <td className={className} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex items-end justify-end mt-5">
        <Pagination
          pageIndex={table.getState().pagination.pageIndex}
          pageCount={table.getPageCount()}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          onPageChange={table.setPageIndex}
          onFirstPage={table.firstPage}
          onLastPage={table.lastPage}
          onPreviousPage={table.previousPage}
          onNextPage={table.nextPage}
          pageSize={table.getState().pagination.pageSize}
          onPageSizeChange={table.setPageSize}
        />
      </div>
    </div>
  )
}

export default Table
