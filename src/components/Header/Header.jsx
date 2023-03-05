import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { isLogedIn } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-oparation';

import i18n from '../../services/i18next';

import { changeTheme } from 'redux/theme/theme-slice';
import { getChangedTheme } from 'redux/theme/theme-selector';

const pages = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'news',
    link: '/news',
  },
  { name: 'profile', link: '/profile' },
];

const authLink = [
  {
    name: 'login',
    link: '/auth/login',
  },
  { name: 'register', link: '/auth/register' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const dispatch = useDispatch();
  const isLogdeIn = useSelector(isLogedIn);
  const theme = useSelector(getChangedTheme);

  const { t } = useTranslation();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleExitFromProfile = () => {
    dispatch(logout());
  };

  const toggleColorMode = () => {
    dispatch(changeTheme());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      color: !theme ? 'white' : 'black',
                      textDecoration: 'none',
                    }}
                    component={Link}
                    textAlign="center"
                  >
                    {t(page.name)}
                  </Typography>
                </MenuItem>
              ))}
              {authLink.map(page => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      color: !theme ? 'white' : 'black',
                      textDecoration: 'none',
                    }}
                    component={Link}
                    textAlign="center"
                  >
                    {t(page.name)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                component={Link}
                to={page.link}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t(page.name)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {!isLogdeIn ? (
              authLink.map(page => (
                <Button
                  component={Link}
                  to={page.link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {t(page.name)}
                </Button>
              ))
            ) : (
              <Button
                onClick={handleExitFromProfile}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {t('logout')}
              </Button>
            )}
          </Box>
        </Toolbar>
        <Box
          sx={{
            display: { xs: 'flex', md: 'block' },
            flexDirection: { xs: 'column', md: 'row' },
            mr: 1,
          }}
        >
          <Button
            sx={{ color: 'white' }}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </Button>
          <Button
            sx={{ color: 'white' }}
            onClick={() => i18n.changeLanguage('uk')}
          >
            Українська
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
