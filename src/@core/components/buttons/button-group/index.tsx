import Button from '@mui/material/Button'

const CButton = ({ variant, onClick, type, children }: any) => {
  return (
    <Button variant={variant} onClick={onClick} type={type}>
      {children}
    </Button>
  )
}

export default CButton
