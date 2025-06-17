import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function Contact() {
  useEffect(() => {
    emailjs.init('WLm_1LgouHpYGJyXt');
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('default_service', 'template_sx7xttj', e.target)
      .then(() => {
        toastr.success("Thank you for reaching out. I'll respond as soon as possible.");
        e.target.reset(); 
      })
      .catch(err => toastr.error(JSON.stringify(err)));
  };

  return (
    <section id="contact" className='animate-on-scroll'>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p className='mb-4'>I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out.</p>
          <br></br><p>📧 gsusmitha26@gmail.com</p>
          <p>📱 +91 xxx xxx xxx</p>
          <p>📍 Hyderabad, Telangana, India</p>
        </div>
        <form onSubmit={sendEmail} className="contact-form ">
          <div className="form-group"><input type="text" name="title" placeholder="Subject" /></div>
          <div className="form-group"><input type="text" name="name" placeholder="Your Name" required /></div>
          <div className="form-group"><input type="email" name="email" placeholder="Your Email" required /></div>
          <div className="form-group"><textarea name="message" rows="5" placeholder="Your Message" required></textarea></div>
          <input type="submit" className="submit-btn" value="Send" />
        </form>
      </div>
    </section>
  );
}

export default Contact;