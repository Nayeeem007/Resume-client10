import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FoodCard.css';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({s}) => {

    const [fav,setFav]=useState(true)

    const toastHandle=(e)=>{
        setFav(false)
        toast('added to favorite')
    }
    return (
        <Container className='card  my-3 p-3'>
                    
               <img className='s-img' src={s.img} alt="" />
               <h3 className="card-title">{s.name}</h3>
               <p>{s.method.length>250? s.method.slice(0,250):s.method}  .....</p>
               <p>{s.rating}  <button disabled={!fav} onClick={toastHandle}><FaHeart></FaHeart></button></p>
               <ToastContainer></ToastContainer>
                </Container>
    );
};

export default FoodCard;