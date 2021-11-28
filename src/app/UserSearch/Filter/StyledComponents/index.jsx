import styled from 'styled-components';
import { COLORS } from '../../../../common/utils/colors';
import { Select } from '../../../../common/components/Select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 20px;
`;

export const Label = styled.div`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 48px 32px;
`;

export const Divider = styled.div`
  border-right: 1px solid ${COLORS.GREY3};
  height: 30px;
`;

export const UserTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  border-radius: 5px;
  border: 0;
  border: 1px solid ${COLORS.GREY5};
  cursor: pointer;

  margin-bottom: 25px;
`;

export const UserTypeButton = styled.div`
  cursor: pointer;
  padding: 0 5px;

  color: ${({ type }) => (type ? COLORS.BLUE2 : COLORS.GREY5)};
  font-size: 14px;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const SSelect = styled(Select)`
  margin-top: 5px;
`;
