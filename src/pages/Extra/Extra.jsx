import React from 'react';
import Marquee from "react-fast-marquee";


const Extra = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-success text-center my-3'>We Serve The Best Food</h2>
            <Marquee speed={100}>
                <img className='m-img w-50' src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="" />
                <img className='m-img w-50' src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg" alt="" />
                <img className='m-img w-50' src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M=" alt="" />
                <img className='m-img w-50' src="https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.jpg?s=612x612&w=0&k=20&c=UPKJT67Bn-2ZL1TakWLK9IhpAOIMgryGhLwoHRsP8ZI=" alt="" />
                <img className='m-img w-50' src="https://media.istockphoto.com/id/618457124/photo/butter-chicken-served-with-homemade-indian-naan-bread.jpg?s=612x612&w=0&k=20&c=7FoiHoDtocfPvQIaRFfFani4e5lkfMTNl_619rTTh4g=" alt="" />

            </Marquee>
        </div>
    );
};

export default Extra;