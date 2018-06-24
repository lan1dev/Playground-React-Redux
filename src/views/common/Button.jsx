import styled from 'styled-components';
import colors from '../constants/colors';

const Button = styled.button`
  border: #b2dfdb;
  background: ${props => (props.error ? colors.error : colors.primary)};
  color: ${props => (props.error ? colors.lightError : colors.lightPrimary)};
  height: 50px;
  width: 100px;
  font-size: 18px;
  margin: 0 10px;
  transition: background 0.3s;
  &:hover {
    transition: background 0.3s;
    background: ${props => (props.error ? colors.darkError : colors.darkPrimary)};
  }
`;

export default Button;
