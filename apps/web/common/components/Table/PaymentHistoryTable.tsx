import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import Pagination from "./Pagination"

export interface BookingsData {
  bookings: {
    listing: string
    user: {
      id: number
      firstName: string
      lastName: string
    }
    dateFrom: string
    dateTo: string
    amount: number
    status: string
  }
}

interface TableProps {
  data: BookingsData[]
  columns: any[]
}

const PaymentHistoryTable = ({ data, columns }: TableProps) => {
  const paymentHistoryTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table className="w-full table-auto">
        <thead className="text-left">
          {paymentHistoryTable
            .getHeaderGroups()
            .map((paymentHistoryTableHeaderGroup) => (
              <tr key={paymentHistoryTableHeaderGroup.id}>
                {paymentHistoryTableHeaderGroup.headers.map(
                  (paymentHistoryTableHeaders) => {
                    return (
                      <th
                        className="pl-4"
                        key={paymentHistoryTableHeaders.id}
                        colSpan={paymentHistoryTableHeaders.colSpan}
                        scope="col"
                      >
                        {paymentHistoryTableHeaders.isPlaceholder ? null : (
                          <div>
                            <span>
                              {flexRender(
                                paymentHistoryTableHeaders.column.columnDef
                                  .header,
                                paymentHistoryTableHeaders.getContext()
                              )}
                            </span>
                          </div>
                        )}
                      </th>
                    )
                  }
                )}
              </tr>
            ))}
        </thead>
        <tbody>
          {paymentHistoryTable.getRowModel().rows.map((row) => {
            return (
              <tr className=" hover:bg-primary-500 cursor-pointer" key={row.id}>
                {row.getVisibleCells().map((cell, _cell) => {
                  let className = "py-2 pl-4 items-center gap-5"
                  if (_cell === 0) className += " rounded-l-xl"
                  if (_cell === row.getVisibleCells().length - 1)
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
          pageIndex={paymentHistoryTable.getState().pagination.pageIndex}
          pageCount={paymentHistoryTable.getPageCount()}
          canPreviousPage={paymentHistoryTable.getCanPreviousPage()}
          canNextPage={paymentHistoryTable.getCanNextPage()}
          onPageChange={paymentHistoryTable.setPageIndex}
          onFirstPage={paymentHistoryTable.firstPage}
          onLastPage={paymentHistoryTable.lastPage}
          onPreviousPage={paymentHistoryTable.previousPage}
          onNextPage={paymentHistoryTable.nextPage}
          pageSize={paymentHistoryTable.getState().pagination.pageSize}
          onPageSizeChange={paymentHistoryTable.setPageSize}
        />
      </div>
    </div>
  )
}

export default PaymentHistoryTable
