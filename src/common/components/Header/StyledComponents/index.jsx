import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.WHITE};

  width: calc(100% - 255px);
  padding: 30px;

  position: fixed;
  z-index: 1;
`;

export const Label = styled.label`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const VerticalDivider = styled.div`
  border-right: 1px solid ${COLORS.GREY3};
  margin: 0 32px;
  height: 32px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  margin-left: ${({ ml }) => ml && `${ml}px`};
`;

export const LeftPartHeader = styled.div`
  display: flex;
`;

export const RightPartHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CircleUserPlaceholder = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  background-color: ${COLORS.GREY3};
  margin-left: 14px;
  cursor: pointer;
`;
