import React, { useEffect, useState } from 'react';
import './SingleChef.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleChef = ({ singleChef }) => {


    return (
        
                <Container className='card  p-3'>
                    <img className='w-100 s-img' src={singleChef.image} alt="" />
               
               <h3 className="card-title">{singleChef.food}</h3>
               <h5 className="card-title text-primary">{singleChef.name}</h5>
               <p className="card-text">{singleChef.yearsOfExperience} years of experience</p>
               <p className="card-text">{singleChef.likes} people like it</p>
               <p className="card-text">{singleChef.number} Recipes</p>
               <Link to={`/details/${singleChef.id}`} className="btn btn-success">View Recipes</Link>
                </Container>
                
            

        
    );
};

export default SingleChef;