import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async () =>{
     const resp = await axios.get('https://catfact.ninja/fact')
     setData(resp.data)
    }

  return (
    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h2>fact: {data && data.fact}</h2>
      <button onClick={fetchData}
      style={{cursor:"pointer", minWidth:"7rem", minHeight:"2rem"}}
      >
        Refresh
      </button>
    </div>
  )
}

export default Homepage
