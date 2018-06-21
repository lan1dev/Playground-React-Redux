import styled from 'styled-components';

const Button = styled.button`
  border: #b2dfdb;
  background: ${props => (props.error ? '#dd2c00' : '#00695c')};
  color: ${props => (props.error ? '#FFAB91' : '#b2dfdb')};
  height: 50px;
  width: 100px;
  font-size: 18px;
  margin: 0 10px;
  transition: background 0.3s;
  &:hover {
    transition: background 0.3s;
    background: ${props => (props.error ? '#BF360C' : '#004d40')};
  }
`;

export default Button;
