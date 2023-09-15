import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data,setData] = useState ([]);

  useEffect(() =>{
  fetch (`https://jsonplaceholder.typicode.com/users`)
  .then((res) => {return res.json()})

  .then((datos) => {
    setData(datos) 
  }) 

  },[]);
  
  console.log (data);
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          data.map((dentist) =>(
            <Card  id = {dentist.id} name={dentist.name} username={dentist.username}/> 
          ))
       }


        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  )
}

export default Home