import React from 'react';
import {NavBar, Footer, } from '../../Component'

const Layout = ({children})=> {
return <>
<NavBar/>
{/* <HeroApp /> */}
 {children}
<Footer/>
</>
}

export default Layout