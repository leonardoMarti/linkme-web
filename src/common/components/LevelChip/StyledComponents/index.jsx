import styled from 'styled-components';
import { COLORS } from '../../../../common/utils/colors';

const setLevelColor = (level) => {
  switch (level) {
    case 1:
      return COLORS.RED2;
    case 2:
      return COLORS.YELLOW;
    default:
      return COLORS.GREEN;
  }
};

export const LevelWrapper = styled.div`
  border-radius: 100px;
  padding: 5px 12px;
  width: fit-content;

  color: ${COLORS.WHITE};
  background-color: ${({ level }) =>
    Boolean(level) ? setLevelColor(level) : COLORS.GREY3};

  font-size: 14px;
  font-weight: 600;
`;
