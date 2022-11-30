import * as React from 'react';
import {useState, useEffect} from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function Resultados({ seleccionado, titulo }) {
    const [time, setTime] = useState();
    const [elseleccionado, setElseleccionado] = useState();
    const [testamount, setTestamount] = useState();

    useEffect(() => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        setTime(`${day} del ${month} de ${year}`)
        setElseleccionado(seleccionado);
        setTestamount((Math.random() * 20.5).toFixed(2));
    }, [time]);
    
    return (
        <React.Fragment>
            <Title>{titulo}</Title>
            <p><small>{elseleccionado ? elseleccionado : ''}</small></p>
            <Typography component="p" variant="h4">
                ${testamount}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                el día {time}
            </Typography>
            <div>
                <Link color="primary" href="/balance">
                    {titulo}
                </Link>
            </div>
        </React.Fragment>
    );
}