import styled from 'styled-components';
import { useState } from 'react';
import Button from '../Button/Button';

const ResultContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #212121;
  padding: 3%;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  color: #b8cad2;
  width: 75%;
  height: 40%;
  z-index: 9;
`;

const ResultModal = () => {
  const [resultClose, setResultClose] = useState(false);

  return (
    <ResultContainer style={{ display: resultClose ? 'none' : 'flex' }}>
      <h3>Message Sent</h3>
      <p>
        Your message was successfully sent. You will receive a response from the
        Haupt Shop team soon. Thank you!
      </p>
      <Button text='Close' onClick={() => setResultClose(true)} />
    </ResultContainer>
  );
};

export default ResultModal;
