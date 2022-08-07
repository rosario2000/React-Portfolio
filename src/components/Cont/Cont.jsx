import './Cont.css';
import Phone from '../img/phone.png';
import Email from '../img/email.png';
import Address from '../img/address.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [isPending,setisPending] = useState(null);


    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setisPending(true);
        emailjs.sendForm('service_cpaez4d', 'template_yg2yb5i', formRef.current, '7sW-ivgcfe7aeP9si')
      .then((result) => {
          console.log(result.text);
          setisPending(false);
      }, (error) => {
          console.log(error.text);
      });
    };
     

    return ( 
        <div className="c container-fluid">
            <div className='row'>

                <div className='col-md-6'>

                    <div className="c-title">
                        LET'S DISCUSS YOUR PROJECT
                    </div>

                    <div className="c-info-item">
                        <img src={Phone} alt="Phone" className="c-icon"/>
                           +91 9654543769 / +91 7011403336
                    </div>

                    <div className="c-info-item email">
                        <img src={Email} alt="Email" className="c-icon"/>
                        <a href = "mailto:harshmohta2000@gmail.com">harshmohta2000</a>
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="Address" className="c-icon"/>
                        Mayur Vihar-1, New Delhi-110091
                    </div>
                </div>
                
                <div className='col-md-6'>

                    <p className='c-desc'>
                        <b>What's your Story?</b> Get in touch. Always 
                        available for freelancing if the right project 
                        comes along me.
                    </p>
 
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name'/><br/>
                        <input type="text" placeholder='Subject' name='user_subject'/><br/>
                        <input type="text" placeholder='Email' name='user_email'/><br/>
                        <textarea name="user_message" placeholder='Message' cols="20" rows="5" />
                        <button>Submit</button>
                    </form>

                </div>

            </div>
            <div className='thank'>
            {isPending && (<p>Thank You for your Response..</p>)}

            </div>
            
        </div>
     );
}
 
export default Contact;