import styled from 'styled-components';

const Title = styled.h1`
  color: #b8cad2;
  white-space: nowrap;
  margin: 0 0 80px 0;
  @media screen and (max-width: 768px) {
    margin: 0 0 48px 0;
  }
`;

const PageTitle = (props) => {
  return (
    <Title style={props.style} text={props.text}>
      {props.text}
    </Title>
  );
};

export default PageTitle;
