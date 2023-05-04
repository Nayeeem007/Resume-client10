import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark mt-5 text-center py-3'>
            <h3 className='text-danger fw-bold'>Want to get the latest update ?</h3>
            <p className='text-secondary'>If you are a customer, you may be also interested in showing the last updated date on our webpages. This is an easy task to manually add a text and date in our page. However, you need to use some functions on PHP based WordPress sites. Most of the standard WordPress themes show the published date by default using the function like below.</p>
            <h4 className='text-warning'>Contact us!</h4>
            <InputGroup className='w-25 mx-auto'>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        
        <InputGroup.Text>Send</InputGroup.Text>
      </InputGroup>
            <h4 className='text-warning'>Or Email us </h4>
            <p><small className='text-secondary'>masterchef@gmail.com</small></p>
            <p className='pt-5 text-secondary'><small>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</small></p>
        </div>
    );
};

export default Footer;