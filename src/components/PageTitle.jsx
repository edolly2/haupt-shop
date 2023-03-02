import styled from 'styled-components';

const Title = styled.h1`
  color: #b8cad2;
`;

const PageTitle = (props) => {
  return (
    <Title style={props.style} text={props.text}>
      {props.text}
    </Title>
  );
};

export default PageTitle;
