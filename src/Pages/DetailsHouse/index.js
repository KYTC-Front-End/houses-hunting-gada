import React from "react";
import { useParams } from 'react-router-dom';
import{ useEffect, useState } from 'react'

function DetailsHouse(){

  const { id } = useParams();

  const [house, setHouse] = useState([]);
  const getHouse = async () => {
      const response = await fetch(`https://my-json-server.typicode.com/GadaAhmed/mockread-api/houses/${id}`);
      const FinalData = await response.json();
      setHouse(FinalData)
  }

       //useEffect()
  useEffect(() => {
  getHouse();
   }, [id]
    )


    return(
      <>

      <img src={house.image} alt="" width={300}/>

      <h1>{house.title}</h1>

      <p>{house.price}</p>

      <p>{house.city}</p>

      <p>{house.bathroom}</p>

      <p>{house.category}</p>

      <p>{house.bathroom}</p>

      <p>{house.description}</p>
      
      </>
  )
  

}

export default DetailsHouse;






 
      
  

      
   
  