import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function preventDefault(event) {
  event.preventDefault();
}

export default function FormaCalc({ seleccionado }) {
  return (
    <React.Fragment>
      <TextField type="number" id="outlined-basic" label="Valor uno" variant="outlined" className='mb-3' />
      <TextField type="number" id="outlined-basic" label="Valor dos" variant="outlined" className='mb-3' />
      <TextField type="number" id="outlined-basic" label="Valor tres" variant="outlined" className='mb-3' />
      <TextField type="number" id="outlined-basic" label="Valor cuatro" variant="outlined" className='mb-3' />
      <hr/>
    <Button variant="outlined" size="large">
      CALCULAR{seleccionado ? ` - ${seleccionado}` : ''}
    </Button>
    </React.Fragment>
  );
}