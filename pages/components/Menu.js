import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function preventDefault(event) {
    event.preventDefault();
}

export default function Menu({categorias, menuSeleccionado}) {

    if(!categorias){
        return 'Cargando...';
    }

    return (
        <List component="nav">
            <React.Fragment>
                {categorias.map((value, i) => (
                    <ListItemButton key={value.tipo} className='menutop' xs={{
                        'padding':'2px 15px'
                    }} onClick={() => menuSeleccionado(value.tipo)}>
                        <ListItemIcon xs={{
                            'minWidth': '10px',
                            'textAlign': 'center',
                        }}>
                            {value.logo}
                        </ListItemIcon>
                        <ListItemText primary={value.tipo} xs={{
                            'fontSize':'0.5rem'
                        }} />
                    </ListItemButton>
                ))}
            </React.Fragment>
            {/* 
            <Divider sx={{ my: 1 }} />
            */}
        </List>
    );
}