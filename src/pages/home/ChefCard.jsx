import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import SingleChef from './SingleChef';

const ChefCard = () => {
    const [chef,setChef]=useState([])
    useEffect(()=>{
        fetch('https://food-server-hamim2001.vercel.app/allchef')
        .then(res=>res.json())
        .then(data=>setChef(data))
        
    },[])
   

    return (
        <div className='c-card container mb-3'>
            {
                chef.map(singleChef=><SingleChef
                key={singleChef.id}
                singleChef={singleChef}
                ></SingleChef>)
            }
        </div>
    );
};

export default ChefCard;