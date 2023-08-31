import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoApp from '../../Utilies/images/logo.png'
import { Margin } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import{HOME_PAGE,About_PAGE,LOGIN,REGISTER} from '../../Utilies/pathRoute'


//const pages = ['Houses', 'About'];
//const settings = ['Profile', 'Favorite', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static"sx={{ backgroundColor: '#4682A9 ' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
         <img  src={LogoApp} width={130} alt=''/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>


             <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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





              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center" >{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>


       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'center'  } }}>
           
         
           
          <Button style={{textTransform:'capitalize'}}><Link to={HOME_PAGE} style={{textDecoration:'none',color:'white'}}>House</Link></Button>

         <Button style={{textTransform:'capitalize'}}><Link to={About_PAGE} style={{textDecoration:'none',color:'white'}}>About</Link></Button>
           
           
            {/* {pages.map((page) => (
              <Button
                key={page}
      
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,textTransform:'capitalize',
                // textDecoration:'none',":hover":{textDecoration:'none',backgroundColor:'#3f7ed1'}
              }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Button variant="contained"  style={{
                borderRadius: 5,
                backgroundColor: "#EB9235",
                 textTransform:"capitalize",
                width:"100px",
                fontSize: "18px",
                // padding:"5px",
                marginRight: '20px'

               }}>
               <Link to={REGISTER} style={{textDecoration:'none',color:'white'}}>Register</Link>
          </Button>
          <Button variant="contained"  style={{
                borderRadius: 5,
                backgroundColor: "#4682A9",
                 textTransform:"capitalize",
                width:"100px",
                fontSize: "18px",
                Color:'4682A9',
                
               }}
          > <Link to={LOGIN} style={{textDecoration:'none',color:'white'}}>Login</Link>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;