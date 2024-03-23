import React from "react"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"

interface TableProps<T> {
  data: T[]
  columns: any[]
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
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
                    className="pl-4 pb-4"
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
              <tr className=" hover:bg-primary-50 cursor-pointer" key={row.id}>
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
    </div>
  )
}

export default Table
