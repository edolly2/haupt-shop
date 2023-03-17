import styled from 'styled-components';

const Btn = styled.button`
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
const Button = (props) => {
  return (
    <Btn onClick={props.onClick} style={props.style} text={props.text}>{props.text}</Btn>
  )
}

export default Button