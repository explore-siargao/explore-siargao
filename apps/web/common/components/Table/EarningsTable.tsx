import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import Pagination from "./Pagination"

export interface EarningBookingsData {
  bookings: {
    listing: string
    dateFrom: string
    dateTo: string
    amount: number
  }
}

interface TableProps {
  data: EarningBookingsData[]
  columns: any[]
}

const EarningsTable = ({ data, columns }: TableProps) => {
  const earningsTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div>
      <table className="w-full table-auto">
        <thead className="text-left">
          {earningsTable.getHeaderGroups().map((earningsTableHeaderGroup) => (
            <tr key={earningsTableHeaderGroup.id}>
              {earningsTableHeaderGroup.headers.map((earningsTableHeader) => {
                return (
                  <th
                    className="pl-4"
                    key={earningsTableHeader.id}
                    colSpan={earningsTableHeader.colSpan}
                    scope="col"
                  >
                    {earningsTableHeader.isPlaceholder ? null : (
                      <div>
                        <span>
                          {flexRender(
                            earningsTableHeader.column.columnDef.header,
                            earningsTableHeader.getContext()
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
          {earningsTable.getRowModel().rows.map((earningsTableRow) => {
            return (
              <tr
                className=" hover:bg-primary-500 cursor-pointer"
                key={earningsTableRow.id}
              >
                {earningsTableRow.getVisibleCells().map((cell, _cell) => {
                  let className = "py-2 pl-4 items-center gap-5"
                  if (_cell === 0) className += " rounded-l-xl"
                  if (_cell === earningsTableRow.getVisibleCells().length - 1)
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
          pageIndex={earningsTable.getState().pagination.pageIndex}
          pageCount={earningsTable.getPageCount()}
          canPreviousPage={earningsTable.getCanPreviousPage()}
          canNextPage={earningsTable.getCanNextPage()}
          onPageChange={earningsTable.setPageIndex}
          onFirstPage={earningsTable.firstPage}
          onLastPage={earningsTable.lastPage}
          onPreviousPage={earningsTable.previousPage}
          onNextPage={earningsTable.nextPage}
          pageSize={earningsTable.getState().pagination.pageSize}
          onPageSizeChange={earningsTable.setPageSize}
        />
      </div>
    </div>
  )
}

export default EarningsTable
