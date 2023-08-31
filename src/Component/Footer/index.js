import  React from 'react';
import {AppBar ,Box,Toolbar, colors } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoApp from '../../Utilies/images/logo.png'
import gitIcon from '../../Utilies/images/gith-hub.png'
import instaIcon from '../../Utilies/images/insta.png'
import faceIcon from '../../Utilies/images/face.png'



const pages = ['2023 all copyright reserved'];
//const settings = ['Profile', 'Favorite', 'Logout'];

function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{
       marginTop: '1rem',
       padding:'1rem',
       backgroundColor:'#4682A9',
       bottom:'0',
       left:'0',
     
    }}
    
   >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <img  src={LogoApp} width={130} alt='' 
         style={{marginBottom:20}}
        />

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
                display: { xs: 'White', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


       
          <Box
           sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center'  } }}>
            {pages.map((page) => (
              <Button
                key={page}
      
                onClick={handleCloseNavMenu}
                style={{marginBottom:20}}
                sx={{ my: 2, color: 'White', display: 'block' ,textTransform:'capitalize'
              }}
              >
                {page}
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={gitIcon}
                 style={{ width: 20, height: 20,margin:20 }}
                 />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            </Menu>
          </Box>



          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={instaIcon}
                    style={{width: 20, height: 20 , margin:'5px' ,}}
                 />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            </Menu>
          </Box>



          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open Links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src={faceIcon} 
                 style={{width: 20, height: 20,margin:20  }}
                 />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            
            </Menu>
          </Box>


          

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;