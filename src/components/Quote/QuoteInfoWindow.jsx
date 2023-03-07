import styled from 'styled-components';
import InPersonQuoteInfo from './InPersonQuoteInfo';
import { IoMdClose } from 'react-icons/io';
import OnlineQuoteInfo from './OnlineQuoteInfo';

const Container = styled.div`
  position: absolute;
  border-radius: 0.4rem;
  /* top: ; */
  /* right: 0; */
  /* width: 400px; */
  /* height: 250px; */
  /* left: -10%; */
  /* right: -10%; */
  /* top: -10%; */
  /* bottom: -10%; */
  min-width: 140%;
  min-height: 140%;
  background-color: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 0.4rem;
  /* z-index: 4; */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  color: #b8cad2;
  display: none;
  flex-direction: column;

  /* justify-content: center; */
  align-items: center;
  padding: 32px;
  z-index: 5;
`;

const ExitBtn = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;

const QuoteInfoWindow = (props) => {
  return (
    <Container style={props.infoWindowStyle}>
      <ExitBtn>
        <IoMdClose
          style={{ position: 'relative' }}
          className='icon exit-icon'
          onClick={props.quoteInfoWindowExit}
        />
      </ExitBtn>
      <InPersonQuoteInfo style={props.inPersonInfoStyle} />
      <OnlineQuoteInfo style={props.onlineInfoStyle} />
    </Container>
  );
};

export default QuoteInfoWindow;
