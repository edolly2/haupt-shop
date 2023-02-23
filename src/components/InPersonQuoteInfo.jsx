import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: none;
`;
const Title = styled.h3``;
const InfoList = styled.ol``;
const InfoListItem = styled.li``;
const InPersonQuoteInfo = (props) => {
  return (
    <Container style={props.style}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est iusto eum
      ipsam assumenda aspernatur eius mollitia! Tempore unde fuga, rerum atque
      totam consequuntur veniam magni, sit nemo, dolor laudantium provident.
    </Container>
  );
};

export default InPersonQuoteInfo;
