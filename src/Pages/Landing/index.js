
import React, { useEffect, useState } from 'react';
import CardContainer from '../../Component/CardContainer';
import './style.css'
import HeroApp from '../../Component/HeroApp'


const Landing = ()=> {
 
    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch("https://my-json-server.typicode.com/GadaAhmed/mockread-api/houses");
        const FinalData = await response.json();
        setHouse(FinalData)
    }

    


    useEffect(() => {
    getHouse();
   
     }, []
      )

    return <>

    <HeroApp/>
   <h2 style={{
    color:'#120229',
    marginLeft:10,
    textDecoration:'underline'

   }}>
  Added House</h2>
   <section className='card-grid'>
   <CardContainer houses={house}/>
   </section>
  

</>
   
  }
export default Landing;

