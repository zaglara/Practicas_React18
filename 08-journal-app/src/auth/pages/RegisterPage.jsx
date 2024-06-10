import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    
    <AuthLayout title="Register">

      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Nombre completo' 
              type='text' 
              placeholder='John Doe'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password' 
              placeholder='Contraseña'
              autoComplete='true'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color="inherit" to='/auth/login'>
              Iniciar sesión
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
