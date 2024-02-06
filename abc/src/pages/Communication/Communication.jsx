import React from 'react';
import './comm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
export default function Nm() {
  const sendEmail=(e)=>{
    e.preventDefault();
    alert("message sented");
emailjs.sendForm('service_wwrf9fp','template_6n022gj',e.target,'yR1v6BxTVpy_AC1mT');

  }
  return (

           <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Message</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p>
            </div>
        </header>
        <div className='bg-dark text-light p-5'>
            <div className='container'>
            <div className='containerlog'>
                <h2 className='text-center mb-5'></h2>
    <h1 className="page__title">Contact Us</h1>
    <form className="contact__form" onSubmit={sendEmail}>
      <label htmlFor="emailFrom">Email:</label>
      <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com"/>
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" className="message__box"></textarea>
      <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}}>
      Send
    </Button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}
