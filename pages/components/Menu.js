import * as React from 'react';
import {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Divider from '@mui/material/Divider';

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
                            'min-width': '10px',
                            'text-align': 'center',
                        }}>
                            {value.logo}
                        </ListItemIcon>
                        <ListItemText primary={value.tipo} />
                    </ListItemButton>
                ))}
            </React.Fragment>
            {/* 
            <Divider sx={{ my: 1 }} />
            */}
        </List>
    );
}