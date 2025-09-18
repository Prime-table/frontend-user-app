import Faqs from '@/app/_components/landing-page/Faqs'
import MenuItem from '@/app/_components/landing-page/MenuItem'
import { menuCards } from '@/app/_components/menuData'
import Table from '@/app/_components/table/Table'
import getRandomItems from '@/app/_utils/randomArray'
import {
  headers,
  tableData,
} from '@/app/_components/table/data'
import React from 'react'

export default function HistoryPage() {
  const recommended = getRandomItems(menuCards, 4)

  return (
    <div>
      <Table headers={headers} data={tableData} />
      <MenuItem recommended={recommended} />
      <Faqs />
    </div>
  )
}
