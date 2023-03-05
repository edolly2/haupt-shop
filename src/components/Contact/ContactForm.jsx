import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  /* align-items: center; */
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const Label = styled.label`
  color: white;
  font-size: 1.8rem;
`;

const Input = styled.input`
  border-radius: 0.4rem;
  padding: 2px 0 2px 8px;
  /* width: 100%; */
`;

const TextArea = styled.textarea`
  border-radius: 0.4rem;
  padding: 8px 0 8px 8px;
`;

const ContactBtn = styled.button`
  padding: 0.4rem;
  margin-top: 8px;
  border-radius: 0.4rem;
  border: 2px solid #005cf0;
  color: #005cf0;
  background-color: transparent;
  align-self: center;
  width: 90%;
  /* width: 15rem; */
  /* width: 17rem; */
  &:hover {
    cursor: pointer;
    background-color: #005cf0;
    color: #b8cad2;
    transform: scale(1.1);
  }
`;

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
  const [focusedInput, setFocusedInput] = useState('');
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

  // Input Focus
  const handleInputBlur = (event) => {
    let errors = {};
    let isValid = true;
    const fieldName = event.target.name;
    setFocusedInput('');
    if (fieldName === 'name' && !name) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
    } else if (fieldName === 'email' && !email) {
      isValid = false;
      errors['email'] = 'Please enter your email address.';
    } else if (typeof email !== 'undefined') {
      // eslint-disable-next-line no-useless-escape
      const pattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
      if (!pattern.test(email)) {
        isValid = false;
        errors['email'] = 'Please enter a valid email address.';
      }
    } else if (fieldName === 'message' && !message) {
      isValid = false;
      errors['message'] = 'Please enter a message.';
    }
    setErrors(errors);
    return isValid;
  };

  // Form Validation
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
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

    if (errors['name'] || errors['email'] || errors['message']) {
      setShowResult(false);
    }

    setErrors(errors);
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
    <Form ref={form} onSubmit={sendEmail}>
      <FormGroup>
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={() => setFocusedInput('name')}
          // required
        />{' '}
        {!errors['name'] ? (
          <div style={{ color: 'transparent' }}>errors</div>
        ) : (
          <div className='invalid-feedback'>{errors['name']}</div>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={() => setFocusedInput('email')}
          // required
        />
        {!errors['email'] ? (
          <div style={{ color: 'transparent' }}>errors</div>
        ) : (
          <div className='invalid-feedback'>{errors['email']}</div>
        )}
        {/* {focusedInput === 'email' && errors['email'] && (
        <div className='invalid-feedback'>{errors['email']}</div>
      )} */}
      </FormGroup>
      <FormGroup>
        <Label htmlFor='message'>Message</Label>
        <TextArea
          id='message'
          name='message'
          value={message}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={() => setFocusedInput('message')}
          rows='10'
          // required
        ></TextArea>
        {!errors['message'] ? (
          <div style={{ color: 'transparent' }}>errors</div>
        ) : (
          <div className='invalid-feedback'>{errors['message']}</div>
        )}
        {/* <div className='invalid-feedback'>{errors['message']}</div> */}
      </FormGroup>
      <ContactBtn type='submit' value='Send'>
        Send
      </ContactBtn>
      <div>{showResult ? <Result /> : null}</div>
    </Form>
  );
};

export default ContactForm;
