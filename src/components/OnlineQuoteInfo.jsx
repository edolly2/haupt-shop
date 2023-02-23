import styled from 'styled-components';

const Container = styled.div`
  display: none;
`;
const Title = styled.h3``;
const InfoList = styled.ol``;
const InfoListItem = styled.li``;

const OnlineQuoteInfo = (props) => {
  return (
    <Container style={props.style}>
      <Title>Want to Get a Quote Online?</Title>
      <InfoList>
        <InfoListItem>Hit btn to begin</InfoListItem>
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
        <InfoListItem></InfoListItem>
      </InfoList>
    </Container>
  );
};

export default OnlineQuoteInfo;
