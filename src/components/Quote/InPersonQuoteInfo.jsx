import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: none;
  flex-direction: column;
  /* justify-content: center; */
  gap: 24px;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const OptionBtn = styled.button`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 2px solid #005cf0;
  color: #005cf0;
  background-color: transparent;
  width: 15rem;
  &:hover {
    cursor: pointer;
    background-color: #005cf0;
    color: #b8cad2;
    transform: scale(1.1);
  }
`;
const Title = styled.h3`
  /* margin-bottom: 16px; */
`;
const InfoP = styled.p`
  /* margin: 16px 0; */
`;
const InPersonQuoteInfo = (props) => {
  return (
    <Container style={props.style}>
      <Title>Want an In-person Quote?</Title>
      <div
        style={{
          margin: '16px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <InfoP>
          Press the
          <span style={{ margin: '0 8px' }}>
            <OptionBtn>Schedule Visit</OptionBtn>
          </span>
          button to use our interactive appointment scheduler
        </InfoP>
        <span style={{ fontWeight: '700', fontSize: '20px' }}>-OR-</span>
        <InfoP>
          Feel free to visit our{' '}
          <NavLink to='/haupt-shop/contact'>Contact Page</NavLink> to get in
          touch via email, social media, or by phone.
        </InfoP>
      </div>
    </Container>
  );
};

export default InPersonQuoteInfo;
