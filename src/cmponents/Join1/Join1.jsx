import React, { useRef } from 'react'
import "./Join1.css"
import emailjs from '@emailjs/browser'

const Join1 =()=> {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y3xmgqh', 'template_xg53764', form.current, '2wqFTMHpVa1dTabKY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='Join' id="join-us">
    <div className='left-j'> 
    <hr />
    <div>
      <span className='stroke-text'> READY TO</span>
      <span>LEVEL UP</span>
    </div>
    <div>
      <span> YOUR BODY</span>
      <span className='stroke-text'>WITH US?</span>
    </div>
    </div>
    <div className='right-j'>

      <form ref={form} className="email-container" onSubmit={sendEmail} >
      
        <input type="email" name="from_name" placeholder='Enter your Email address' />
        <button className='btn btn-j'>Join Now</button>
      </form>
    </div>
    </div>
  );
};

export default Join1

