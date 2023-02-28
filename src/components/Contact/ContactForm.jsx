import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

const Result = () => {
  return (
    <p>
      Your message was successfully sent. You will hear from the Haupt Shop team
      soon. Thank you!
    </p>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showResult, setShowResult] = useState(false);

  // Input Change
  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = DOMPurify.sanitize(event.target.value);
    if (fieldName === 'name') {
      setName(fieldValue);
    } else if (fieldName === 'email') {
      setEmail(fieldValue);
    } else if (fieldName === 'message') {
      setMessage(fieldValue);
    }
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
    } else {
      isValid = true;
    }

    if (!email) {
      isValid = false;
      errors['email'] = 'Please enter your email address.';
    }

    if (typeof email !== 'undefined') {
      // eslint-disable-next-line no-useless-escape
      const pattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(email)) {
        isValid = false;
        errors['email'] = 'Please enter a valid email address.';
      }
    }

    if (!message) {
      isValid = false;
      errors['message'] = 'Please enter a message.';
    }

    setErrors(errors);
    handleInputChange();
    return isValid;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }

    emailjs
      .sendForm(
        'service_1ongyhv',
        'template_01f81p5',
        form.current,
        'KJW8b9iUuWNuQ3C1M'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowResult(true);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={() => validateForm()}
        // required
      />
      <div className='invalid-feedback'>{errors['name']}</div>
      <label>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={handleInputChange}
        // required
      />
      <div className='invalid-feedback'>{errors['email']}</div>
      <label>Message</label>
      <textarea
        id='message'
        name='message'
        value={message}
        onChange={handleInputChange}
        // required
      ></textarea>
      <div className='invalid-feedback'>{errors['message']}</div>
      <input type='submit' value='Send' />
      <div>{showResult ? <Result /> : null}</div>
    </form>
  );
};

export default ContactForm;
