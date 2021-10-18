import styled from 'styled-components';
import { COLORS } from '../../../../common/utils/colors';

export const CustomInput = styled.input`
  height: 50px;
  border-radius: 5px;
  border: 0.5px solid
    ${({ errors }) => (errors ? COLORS.RED : COLORS.GREY)};
  padding: 0 10px;
  width: 100%;
`;
