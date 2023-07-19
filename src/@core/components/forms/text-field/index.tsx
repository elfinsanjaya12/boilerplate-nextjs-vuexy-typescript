import { FormControl, FormHelperText, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { TextFieldProps } from './types'

export const CTextField = (props: TextFieldProps) => {
  const { control, errors, name, label, placeholder } = props

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            error={Boolean(errors[name])}
            aria-describedby={name}
          />
        )}
      />
      {errors[name] && (
        <FormHelperText sx={{ color: 'error.main' }} id={name}>
          {errors[name].message}
        </FormHelperText>
      )}
    </FormControl>
  )
}
