import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import SearchIcon from '@mui/icons-material/Search';
import heroImage from '../../Utilies/images/hero-house.png'

import {SEARCH} from '../../Utilies/pathRoute'



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




export default function HeroApp() {

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(SEARCH)
}
  return (
    <Card sx={{ minWidth: 275 }}  
    style={{backgroundImage:`url(${heroImage})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    height:'500px',
     display:'flex',
            justifyContent:'Center',
            alignItems:'center', 
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 }}   color="#000000"gutterBottom >
      
        Find The Place to live you   
        </Typography>

        <Typography sx={{ fontSize: 30 }} color="#EB9235" gutterBottom >
        Dreams Easily Her 
        </Typography>
       

          <Search style={{
             borderRadius:'30',
             width:400,
             marginRight:5,
             marginBottom:10,

             backgroundColor:'#edf3f7'
          }}
        >
            
            <SearchIconWrapper>
              <SearchIcon style={{color:'#EB9235'}} />
            </SearchIconWrapper>

            <StyledInputBase
              onClick={handleSearch}
              placeholder="search house ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </CardContent>


     
    </Card>
  );
}