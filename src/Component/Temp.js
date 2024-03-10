import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Temp.css'
const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect (() => {
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6c407e89100dc32c36edb1e82b93bea0`
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main)
      }  
        fetchApi();
    },[search])



     return (
        <>
            <div className='box'>
                <div className="inputdata">
                    <input type="text" className='inputfield' value={search}
                        onChange={(event) => {
                          setSearch(event.target.value)
                        }} />
                </div>
                {
                    !city ? (
                        <p className='nodata'>No Data Found</p>
                    ) : (<>

                    
                        <div className="info">
                    <h2 className='location'>
                        {search} 
                    </h2>
                    <h1 className='temp'>
                        {city.temp}°C
                    </h1>
                    <h3>Min : {city.temp_min}°C  | Max : {city.temp_max}°C </h3>
                   </div>
                    <div className='wave -one'></div>
                   <div className='wave -two'></div>
                   <div className='wave -three'></div>

                  </>
                    )
                }
            </div>

        </>
    )
}

export default Temp

