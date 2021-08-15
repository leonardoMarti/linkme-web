import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
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

export const VerticalDivider = styled.div`
  border-right: 1px solid ${COLORS.HALF_DARK_GREY};
  margin: 0 32px;
  height: 32px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS.HALF_DARK_WHITE};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
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
  background-color: ${COLORS.HALF_DARK_GREY};
  margin-left: 14px;
  cursor: pointer;
`;
