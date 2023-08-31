

import notFoundImage from '../../Utilies/images/not-found 1.png.png'

import { Button } from '@mui/material'

import {HOME_PAGE} from '../../Utilies/pathRoute'

import { useNavigate } from 'react-router-dom';
import './style.css'



export default  function NotFound(){

const navigate = useNavigate();



function navToHome() {

  navigate(HOME_PAGE)

   console.log('click')

 };







return(

  <>

<div style={{textAlign:'center', }}>

  <img src={notFoundImage} alt='' className='img-notFound'/>


  <h1>Page is Not Found</h1>



  <Button variant="contained" style={{

    backgroundColor:'#EB9235',

    color:'white',

    textTransform:'capitalize'

  }} onClick={navToHome}>

    Go Home

  </Button>

  ​​</div>


  </>

)

}