import styled from 'styled-components';

const PageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 3;
`;

const Overlay = (props) => {
  return <PageOverlay style={props.style}></PageOverlay>;
};

export default Overlay;
