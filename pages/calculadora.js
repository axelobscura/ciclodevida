import * as React from 'react';
import Layout from './components/Layout';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from './components/Chart';
import Resultados from './components/Resultados';
import Menu from './components/Menu';
import Title from './components/Title';
import FormaCalc from './components/FormaCalc';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Derechos Reservados © '}
      <Link color="inherit" href="#">
        Instituto Mexicano del Cemento y del Concreto A.C.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [categorias, setCategorias] = React.useState([
    { 
      'tipo': 'PINTURA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'MORTERO',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'CONCRETO',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'MALLA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'FIBRA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'LOSACERO',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'VARILLA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'LADRILLO',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'BLOCK',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'VIGUETA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'BOVEDILLA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'ARMADO',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'TABLAROCA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'DUROK',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'CIMBRA',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'IMPERMEABILIZANTE',
      'logo': <DashboardIcon />
    },
    { 
      'tipo': 'AISLANTE',
      'logo': <DashboardIcon />
    },
  ]);
  const [seleccionado, setSeleccionado] = React.useState();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuSeleccionado = (e) => {
    setSeleccionado(e);
  };

  
  return (
    <Layout>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                PANEL DE CONTROL 
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <img src="./logo_imcyc.png" alt="" title="" style={{'maxWidth':'70%'}} />
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <Menu categorias={categorias} menuSeleccionado={(e) => menuSeleccionado(e)} />
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Title>Calcular {seleccionado ? `para ${seleccionado}` : ''}</Title>
                    <hr/>
                    <FormaCalc seleccionado={seleccionado} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Resultados 
                      seleccionado
                      titulo="Costo General"
                    />
                  </Paper>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      marginTop: '10px'
                    }}
                  >
                    <Resultados 
                      seleccionado
                      titulo="Costo Total"
                    />
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={8} lg={9} style={{'display':'none'}}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Chart seleccionado={seleccionado} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

