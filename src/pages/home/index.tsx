// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import TableExample from 'src/views/pages/home/TableExample'

const Home = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <TableExample />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Home
