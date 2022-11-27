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

export default function FormaCalc() {
  return (
    <React.Fragment>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" className='mb-3' />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <hr/>
    <Button variant="outlined" size="large">
      CALCULAR
    </Button>
    </React.Fragment>
  );
}