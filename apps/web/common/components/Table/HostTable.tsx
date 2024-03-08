import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import Pagination from "./Pagination"

export interface ListingsData {
  id: number
  hostId: number
  title: string
  address: string
  imageKey: string
  status: string
}

interface TableProps {
  data: ListingsData[]
  columns: any[]
}

const HostTable = ({ data, columns }: TableProps) => {
  const hostTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table className="w-full table-auto">
        <thead className="text-left">
          {hostTable.getHeaderGroups().map((headerGroups) => (
            <tr key={headerGroups.id}>
              {headerGroups.headers.map((headers) => {
                return (
                  <th
                    className="pl-4"
                    key={headers.id}
                    colSpan={headers.colSpan}
                    scope="col"
                  >
                    {headers.isPlaceholder ? null : (
                      <div>
                        <span>
                          {flexRender(
                            headers.column.columnDef.header,
                            headers.getContext()
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
          {hostTable.getRowModel().rows.map((row) => {
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
          pageIndex={hostTable.getState().pagination.pageIndex}
          pageCount={hostTable.getPageCount()}
          canPreviousPage={hostTable.getCanPreviousPage()}
          canNextPage={hostTable.getCanNextPage()}
          onPageChange={hostTable.setPageIndex}
          onFirstPage={hostTable.firstPage}
          onLastPage={hostTable.lastPage}
          onPreviousPage={hostTable.previousPage}
          onNextPage={hostTable.nextPage}
          pageSize={hostTable.getState().pagination.pageSize}
          onPageSizeChange={hostTable.setPageSize}
        />
      </div>
    </div>
  )
}

export default HostTable
