import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Resultados() {
  return (
    <React.Fragment>
      <Title>Costo general</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        el día 5 de Diciembre, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Balance general
        </Link>
      </div>
    </React.Fragment>
  );
}