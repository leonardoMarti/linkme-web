import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 255px;
  height: 100vh;

  position: fixed;

  background-color: ${COLORS.LIGHT_BLACK};
`;

export const MenuHeader = styled.div`
  display: flex;
  margin: 30px 0 50px 25px;
`;

export const Label = styled.label`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  display: flex;
  color: ${COLORS.LIGHT_GREY};
  background-color: ${COLORS.LIGHT_BLACK};
  padding: 15px 0;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    color: #dde2ff;
    background-color: rgba(164, 166, 179, 0.1);
    border-left: 4px solid #dde2ff;

    & svg {
      & path {
        fill: #dde2ff;
      }
    }
  }

  & svg {
    margin: 0 25px;
  }
`;

export const HorizontalDivider = styled.div`
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};
  margin: 20px 10px;
`;
