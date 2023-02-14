import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

const Container = styled.div`
  background-color: #005cf0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.6rem;
  max-height: 3.6rem;
`;

const PhoneLink = styled.a`
  color: #b8cad2;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  white-space: nowrap;
  /* display: inline-block; */
  width: 50%;
  &:hover {
    /* font-weight: 700; */
  }
`;

// const PhoneWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

const PhoneContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.4rem;
`;

const InfoPCall = styled.p`
  margin-right: 1.6rem;
  @media screen and (max-width: 800px) {
    margin-right: 0.4rem;
  }

  @media screen and (max-width: 490px) {
    display: none;
  }
`;

const InfoPNumber = styled.p`
  margin-left: 1.6rem;
  @media screen and (max-width: 800px) {
    margin-left: 0.4rem;
  }

  @media screen and (max-width: 490px) {
    margin-left: 0;
  }
`;

const InfoPDirections = styled.p``;

const Split = styled.span`
  @media screen and (max-width: 490px) {
    display: none;
  }
`;

const InfoBar = () => {
  return (
    <Container>
      {/* <PhoneContainer> */}
      {/* <PhoneWrapper> */}
      <PhoneLink href='tel:402-228-9649'>
        <BsTelephone />
        {/* </PhoneLink> */}
        {/* </PhoneWrapper> */}
        {/* <PhoneWrapper> */}
        {/* <PhoneLink href='tel:402-228-9649'> */}
        <InfoPCall>Call Now</InfoPCall>
        <Split>|</Split>
        <InfoPNumber>(402)228-9649</InfoPNumber>
      </PhoneLink>
      {/* </PhoneWrapper> */}
      {/* </PhoneContainer> */}
      <PhoneLink
        href='https://goo.gl/maps/uRWHdWGH6BPbaJWz6'
        style={{ justifyContent: 'flex-end' }}
      >
        <FiMapPin className='top-bar-icon' />
        <InfoPDirections>Get Directions</InfoPDirections>
      </PhoneLink>
    </Container>
  );
};

export default InfoBar;
