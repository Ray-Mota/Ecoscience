import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import images from '../assets/images.js';

const links = [
  { to: '/calculadora', label: 'Calculadora de carbono' },
  { to: '/impacto', label: 'Impacto do projeto' },
  { to: '/ecochat', label: 'EcoChat' },
];

// transparent: usado só na home, sobre o hero; fica sólido ao rolar 50px.
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();


  return (
    <>
      <AppBar
        position={'sticky'}
        elevation={0}
        sx={{
          backgroundColor:'primary.dark',
          transition: 'background-color 0.3s ease-in-out',
          borderBottom:'1px solid rgba(255,255,255,0.12)',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 84 }, justifyContent: 'space-between' }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="img" src={images.logo} alt="Ecoscience" sx={{ width: { xs: 128, md: 150 } }} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {links.map((link) => (
              <Button
                key={link.to}
                component={RouterLink}
                to={link.to}
                sx={{
                  color: '#F5F7F4',
                  borderRadius: 999,
                  borderBottom: location.pathname === link.to ? '2px solid #E2A33D' : '2px solid transparent',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            aria-label="Abrir menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#F5F7F4' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, pt: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
            <IconButton aria-label="Fechar menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {links.map((link) => (
              <ListItemButton
                key={link.to}
                component={RouterLink}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
                selected={location.pathname === link.to}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
