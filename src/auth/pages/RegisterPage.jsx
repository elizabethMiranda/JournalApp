import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">
    <form>
        <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                  label='Nombre Completo' 
                  type='text' 
                  placeholder='Nombre Completo'
                  fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                  label='Correo' 
                  type='text' 
                  placeholder='Correo electrónico'
                  fullWidth
                />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }} >
                <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='contraseña' 
                  fullWidth
                />
            </Grid>
            <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                  Ingresar
              </Link>
            </Grid>
        </Grid>
    </form>
    </AuthLayout>
  )
}
