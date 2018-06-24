import styled from 'styled-components';
import colors from '../constants/colors';

const Text = styled.p`
  color: ${props => (props.error ? colors.error : 'black')};
`;

export default Text;
