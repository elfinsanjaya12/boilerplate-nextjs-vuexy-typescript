import React, { useState } from 'react'
import TableBasic from 'src/@core/components/tables/basic'
import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'ID'
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Name'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'Email'
  },
  {
    flex: 0.15,
    minWidth: 130,
    field: 'start_date',
    headerName: 'Date'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'experience',
    headerName: 'Experience'
  },
  {
    flex: 0.1,
    field: 'age',
    minWidth: 80,
    headerName: 'Age'
  }
]

export default function TableExample() {
  const [size, setSize] = useState<number>(7)
  const [page, setPage] = useState<number>(0)

  return (
    <TableBasic
      columns={columns}
      rows={rows}
      size={size}
      setSize={setSize}
      setPage={setPage}
      page={page}
    />
  )
}
