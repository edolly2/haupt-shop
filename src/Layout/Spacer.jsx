import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  max-width: 100%;
  height: 5.6rem;
  @media screen and (max-width: 768px) {
    height: 3.6rem;
  }
`;

const Spacer = () => {
  return <Div></Div>;
};

export default Spacer;
