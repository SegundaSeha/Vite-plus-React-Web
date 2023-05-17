import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" sx='password' /> 
      <Button variant="contained">Login</Button>
    </Box>
    </Container>
      
    </>
  )
}

export default App
