import styled from 'styled-components';

const Title = styled.h1`
  color: #b8cad2;
`;

const PageTitle = (props) => {
  return <Title text={props.text}>{props.text}</Title>;
};

export default PageTitle;