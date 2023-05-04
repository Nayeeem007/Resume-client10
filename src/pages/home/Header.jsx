import React from 'react';
import './Header.css'
import { Button, Carousel, Container } from 'react-bootstrap';

const Header = () => {
    return (
       <Container className='my-5'>
         <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block c-img rounded w-100"
          src="https://images.unsplash.com/photo-1428895009712-de9e58a18409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption className='c-text'>
        <h1 className='text-warning fw-bold'>Welcome To</h1> 
          <h1 className='text-white'>World Class Chef</h1>
          <p>Since 1955, we have pioneered foodservice solutions that build our customers’ confidence in their operations—allowing them to embrace innovative approaches that result in profitable opportunities. With our intuitive and dependable designs, our customers achieve a greater return on their investment while emboldening their menus. As a member of our family, you can trust that we are here for you through cutting-edge kitchen solutions and a system of support for all of your installation, training, culinary, and technical needs. </p> <br />
          <Button variant="success">Contact Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded c-img w-100"
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption className='c-text'>
        <h1 className='text-warning fw-bold'>Welcome To</h1> 
          <h1 className='text-white'>World Class Chef</h1>
          <p>Since 1955, we have pioneered foodservice solutions that build our customers’ confidence in their operations—allowing them to embrace innovative approaches that result in profitable opportunities. With our intuitive and dependable designs, our customers achieve a greater return on their investment while emboldening their menus. As a member of our family, you can trust that we are here for you through cutting-edge kitchen solutions and a system of support for all of your installation, training, culinary, and technical needs. </p> <br />
          <Button variant="outline-success">Contact Us</Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block rounded c-img w-100"
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption className='c-text'>
        <h1 className='text-warning fw-bold'>Welcome To</h1> 
          <h1 className='text-white'>World Class Chef</h1>
          <p>Since 1955, we have pioneered foodservice solutions that build our customers’ confidence in their operations—allowing them to embrace innovative approaches that result in profitable opportunities. With our intuitive and dependable designs, our customers achieve a greater return on their investment while emboldening their menus. As a member of our family, you can trust that we are here for you through cutting-edge kitchen solutions and a system of support for all of your installation, training, culinary, and technical needs. </p> <br />
          <Button variant="outline-success">Contact Us</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </Container>
    );
};

export default Header;