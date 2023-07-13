export type TableBasicColumnProps = {
  flex?: number
  field?: string
  minWidth: number
  headerName: string
}

export type TableBasicProps = {
  columns: {
    flex: number
    field: string
    minWidth: number
    headerName: string
  }[]
  rows: any[]
  page?: number
  setPage?: any
  size?: number
  setSize?: any
}
