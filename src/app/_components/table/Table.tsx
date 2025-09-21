'use client'

import React, { useState } from 'react'

type TableProps<T> = {
  headers: string[]
  data: T[]
}

export default function Table<
  T extends Record<string, string | number>,
>({ headers, data }: TableProps<T>) {
  const [activeTab, setActiveTab] = useState<
    'Upcoming' | 'Past'
  >('Upcoming')
  const [currentPage, setCurrentPage] =
    useState(1)
  const rowsPerPage = 10

  // filter by active tab
  const filteredData = data.filter(
    (row) => row.status === activeTab,
  )

  // pagination
  const totalPages = Math.ceil(
    filteredData.length / rowsPerPage,
  )
  const startIndex =
    (currentPage - 1) * rowsPerPage
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage,
  )

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="overflow-x-auto text-[16px] leading-[100%] font-normal">
      {/* Tabs */}
      <div className="flex gap-4 pb-[28px] border-b-[0.5px] border-b-input-border ">
        {['Upcoming', 'Past'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(
                tab as 'Upcoming' | 'Past',
              )
              setCurrentPage(1)
            }}
            className={`text-sm font-medium ${
              activeTab === tab
                ? 'text-secondary font-semibold underline underline-offset-[31.5px]'
                : ' hover:text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700 px-6">
        <thead className="bg-gray-50  ">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-6 pt-[45px] pb-[34px]  border-b-[2px] border-input-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 even:bg-gray-50/30 transition-colors"
            >
              {Object.entries(row).map(
                ([key, cell], j) => (
                  <td
                    key={j}
                    className="px-6 pt-6 pb-[34px] border-b-[0.5px] border-b-input-border "
                  >
                    {key === 'status' ? (
                      <span
                        className={`font-medium ${
                          cell === 'Upcoming'
                            ? 'text-success'
                            : 'text-warning'
                        }`}
                      >
                        {String(cell)}
                      </span>
                    ) : (
                      String(cell)
                    )}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {filteredData.length > rowsPerPage && (
        <div className="flex items-center justify-center gap-4 p-4 text-sm">
          <button
            onClick={() =>
              goToPage(currentPage - 1)
            }
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1
                ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                : 'text-secondary border-gray-300 hover:bg-gray-100'
            }`}
          >
            Prev
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              goToPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages
                ? 'text-gray-400 border-gray-200 cursor-not-allowed'
                : 'text-secondary border-gray-300 hover:bg-gray-100'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
