import styled from 'styled-components';
import { COLORS } from '../../../../common/utils/colors';

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.BLACK};
  height: 50px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;
