import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import OnlineQuoteInfo from './OnlineQuoteInfo';
import { useState } from 'react';
import InPersonQuoteInfo from './InPersonQuoteInfo';
import QuoteInfoWindow from './QuoteInfoWindow';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 4.8rem; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50vw;
  min-height: 25vh;
  background-color: rgba(33, 33, 33, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0.4rem;
  z-index: 4;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 16px 0;
`;

const OptionP = styled.p`
  padding: 0;
  margin: 0;
  color: #b8cad2;
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

const ExitBtnWrapper = styled.div`
  width: 100%;
  /* padding: 0.8%; */
  display: flex;
  justify-content: flex-end;
`;

const ExitBtn = styled.div`
  /* position: absolute;
  top: 0.8rem;
  right: 0.8rem; */
  margin: -16px -16px 0 0;
`;

const Line = styled.div`
  width: 50%;
  margin: 16px 0;
  height: 2px;
  background-color: #b8cad2;
  /* margin: 36px 0; */
  /* border-radius: 100%; */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const QuoteModal = (props) => {
  const [onlineInfoActive, setOnlineInfoActive] = useState(false);
  const [inPersonInfoActive, setInPersonInfoActive] = useState(false);

  return (
    <Container style={props.style}>
      <QuoteInfoWindow
        quoteInfoWindowExit={() => {
          setInPersonInfoActive(false);
          setOnlineInfoActive(false);
        }}
        infoWindowStyle={{
          display:
            onlineInfoActive ||
            // ? 'flex'

            inPersonInfoActive
              ? 'flex'
              : 'none',
        }}
        onlineInfoStyle={{ display: onlineInfoActive ? 'flex' : 'none' }}
        inPersonInfoStyle={{
          display: inPersonInfoActive ? 'flex' : 'none',
        }}
      />
      {/* <OnlineQuoteInfo /> */}
      <ExitBtnWrapper
        style={{
          visibility:
            onlineInfoActive || inPersonInfoActive ? 'hidden' : 'visible',
        }}
      >
        <ExitBtn>
          <IoMdClose
            className='icon exit-icon'
            onClick={props.onModalExitClick}
          />
        </ExitBtn>
      </ExitBtnWrapper>
      <OptionWrapper>
        <OptionP>
          Request a Quote Online{'  '}
          <BsInfoCircle
            className='info-icon'
            onClick={() => {
              setInPersonInfoActive(false);
              setOnlineInfoActive(true);
            }}
          />
          {/* <OnlineQuoteInfo
            style={{ display: onlineInfoActive ? 'flex' : 'none' }}
          />
          <InPersonQuoteInfo
            style={{ display: inPersonInfoActive ? 'flex' : 'none' }}
          /> */}
        </OptionP>
        <NavLink to='/haupt-shop/quote' className='link'>
          <OptionBtn
            onClick={props.onlineQuoteBtnClick}
            // className='link link-hover'
          >
            Start
          </OptionBtn>
        </NavLink>
      </OptionWrapper>
      <Line />
      <OptionWrapper>
        <OptionP>
          Schedule an In-Person Visit{'  '}
          <BsInfoCircle
            className='info-icon'
            onClick={() => {
              setOnlineInfoActive(false);
              setInPersonInfoActive(true);
            }}
          />
        </OptionP>
        <OptionBtn>Schedule Visit</OptionBtn>
      </OptionWrapper>
    </Container>
  );
};

export default QuoteModal;
