import { Grid } from '@mui/material'

import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CTextField } from 'src/@core/components/forms/text-field'
import { CButton } from 'src/@core/components/buttons/button'

const defaultValues = {
  email: ''
}

const schema = yup.object().shape({
  email: yup.string().email().required()
})

const TextFieldValidation = () => {
  // ** Hook
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = () => toast.success('Form Submitted')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <CTextField
            control={control}
            label='Email'
            name='email'
            placeholder='enter email'
            errors={errors}
          />
        </Grid>
        <Grid item xs={12}>
          <CButton size='medium' type='submit' variant='contained'>
            Submit
          </CButton>
        </Grid>
      </Grid>
    </form>
  )
}

export default TextFieldValidation
