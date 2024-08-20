import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import artMedicaImage from '../assets/logo_art_medica.png';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

const pages = ['Zabiegi chirurgiczne', 'Medycyna estetyczna', 'Chirurgia estetyczna', 'Lokalizacja'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="fixed" sx={{ bgcolor: "white" }}>
            <Container maxWidth="xl" sx={{ padding: 0 }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <a href={"/"}>
                            <img src={artMedicaImage} alt="Art Medica" style={{
                                width: '250px',
                                height: 'auto'
                            }}/>
                        </a>
                    </Box>

                    {/* Mobile menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>

                                    <Typography
                                        textAlign="center"
                                        component={Link}
                                        to={`/${page.toLowerCase().replace(' ', '-')}`}
                                        sx={{ color: 'black', textDecoration: 'none' }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 3, color: 'black', display: 'block' }}
                                href={`/${page.toLowerCase().replace(' ', '-')}`}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;