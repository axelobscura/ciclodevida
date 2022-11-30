import * as React from 'react';
import Layout from './components/Layout';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function Balance() {
    return (
      <Layout>
        <ThemeProvider>
          <Box sx={{ display: 'flex' }}>
            BALANCE
          </Box>
        </ThemeProvider>
      </Layout>
    );
}