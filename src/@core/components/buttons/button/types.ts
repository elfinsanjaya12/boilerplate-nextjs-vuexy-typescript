// ** React Imports
import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  variant?: 'text' | 'outlined' | 'contained'
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  disabled?: boolean
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
}
