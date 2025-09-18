'use client'

import React from 'react'

type TableProps<T> = {
  headers: string[]
  data: T[]
}

export default function Table<
  T extends Record<string, unknown>,
>({ headers, data }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-6 py-3 font-medium text-gray-900 border-b"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 even:bg-gray-50/30 transition-colors"
            >
              {Object.values(row).map(
                (cell, j) => (
                  <td
                    key={j}
                    className="px-6 py-3 border-b"
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
