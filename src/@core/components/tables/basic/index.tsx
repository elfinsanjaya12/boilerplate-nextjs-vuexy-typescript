import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { TableBasicProps } from './types'

function TableBasic(props: TableBasicProps) {
  const { columns, rows, page, setPage, size, setSize } = props

  return (
    <div>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={size}
        rowsPerPageOptions={[7, 10, 25, 50]}
        page={page}
        disableSelectionOnClick
        onPageChange={page => {
          setPage(page)
        }}
        onPageSizeChange={newPageSize => setSize(newPageSize)}
      />
    </div>
  )
}

TableBasic.propTypes = {}

export default TableBasic
