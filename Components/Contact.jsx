import { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { AiOutlineMail } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log('EmailJS Result:', result);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error); 
        alert('An error occurred, please try again.');
      });
  };

  return (
    <div id='contact' className='cls-contact'>
      <div className="cls-contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="" />
      </div>
      <div className="cls-contact-section">
        <div className="cls-contact-left">
          <h1>Let's talk</h1>
          <p>If my work or approach resonates with you, feel free to reach out. I’m available for new projects and open to connecting with people who share similar passions. You can contact me anytime!</p>
          <div className="cls-contact-details">
            <div className="cls-contact-detail">
              <AiOutlineMail size={30} />
              <p>heba.mohamed@btu.edu.eg</p>
            </div>
            <div className="cls-contact-detail">
              <FaMapMarkerAlt size={30} />
              <p>Egypt, Beni Suef</p>
            </div>
            <div className="cls-contact-detail">
              <FiPhoneCall size={30} />
              <p>01101806081</p>
            </div>
          </div>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="cls-contact-form">
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter Your Name' required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder='Enter Your Email' required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>
          <button type="submit" className="cls-contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
