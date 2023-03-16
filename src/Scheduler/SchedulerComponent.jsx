import { useState } from 'react';
import axios from 'axios';

const SchedulerComponent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!date || !time || !email) {
        throw new Error('Please fill in all fields.');
      }
      const response = await axios.post('/schedule-appointment', {
        date,
        time,
        email,
      });
      console.log(response.data);

      const emailResponse = await axios.post('/send-email', {
        to: email,
        subject: 'Request Appointment Scheduled',
        text: `Your appointment has been requested for ${date} at ${time}`,
      });
      console.log(emailResponse.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form /*onSubmit={handleSubmit}*/>
      <label style={{ color: 'white' }} htmlFor='date'>
        Date:
      </label>
      <input
        type='date'
        id='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label style={{ color: 'white' }} htmlFor='time'>
        Time:
      </label>
      <input
        type='time'
        id='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <label style={{ color: 'white' }} htmlFor='semail'>
        Email:
      </label>
      <input
        type='email'
        id='semail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type='submit'>Request Appointment</button>
    </form>
  );
};

export default SchedulerComponent;
