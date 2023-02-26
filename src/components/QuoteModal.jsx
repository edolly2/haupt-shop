import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import OnlineQuoteInfo from './OnlineQuoteInfo';
import { useState } from 'react';
import InPersonQuoteInfo from './InPersonQuoteInfo';
import QuoteInfoWindow from './QuoteInfoWindow';

const Container = styled.div`
  position: relative;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50vw;
  min-height: 25vh;
  background-color: rgb(33, 33, 33);
  border-radius: 0.4rem;
  z-index: 4;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
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

const ExitBtn = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
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
      <ExitBtn>
        <IoMdClose
          className='icon exit-icon'
          onClick={props.onModalExitClick}
        />
      </ExitBtn>
      <OptionWrapper>
        <p>
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
        </p>
        <OptionBtn>Start</OptionBtn>
      </OptionWrapper>
      <OptionWrapper>
        <p>
          Schedule an In-Person Visit{'  '}
          <BsInfoCircle
            className='info-icon'
            onClick={() => {
              setOnlineInfoActive(false);
              setInPersonInfoActive(true);
            }}
          />
        </p>
        <OptionBtn>Schedule Visit</OptionBtn>
      </OptionWrapper>
    </Container>
  );
};

export default QuoteModal;
