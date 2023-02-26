import styled from 'styled-components';

const Container = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Title = styled.h3``;
const InfoList = styled.ol`
  list-style: decimal;
`;
const InfoListItem = styled.li`
  margin: 16px 0;
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

const OnlineQuoteInfo = (props) => {
  return (
    <Container style={props.style}>
      <Title>Want to Get a Quote Online?</Title>
      <InfoList>
        <InfoListItem>
          Hit the
          <span style={{ margin: '0 8px' }}>
            <OptionBtn>Start</OptionBtn>
          </span>
          button to begin
        </InfoListItem>
        <InfoListItem>
          Take at least 5 pictures of the damage from 3 different angles, as
          well as 2 close ups and 2 at a distance of 6ft-10ft away
        </InfoListItem>
        <InfoListItem>
          Drag and drop the photos into the online file
        </InfoListItem>
        <InfoListItem>
          Hit upload and wait for a return call with the assessment
        </InfoListItem>
      </InfoList>
    </Container>
  );
};

export default OnlineQuoteInfo;
