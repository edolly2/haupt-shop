import React from 'react';

const QuoteForm = () => {
  return (
    <form>
      {/* Form Progress Bar */}
      <label>
        First Name
        <input type='text' />
      </label>
      <label>
        Last Name
        <input type='text' />
      </label>
      <label>
        Email
        <input type='email' />
      </label>
      <label>
        Phone
        <input type='tel' />
      </label>
      <label>
        Choose Files | Min: 5
        <input type='file' name='' id='' />
      </label>
      <label>
        Brief Description
        <textarea />
      </label>
      <label>
        Any Other Comments
        <textarea />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default QuoteForm;
