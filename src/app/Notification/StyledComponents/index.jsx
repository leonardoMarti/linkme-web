import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';
import { Button } from '../../../common/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  height: fit-content;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.WHITE2};
  box-sizing: border-box;
  border-radius: 8px;

  padding: 20px;
  margin-bottom: 15px;
`;

export const Label = styled.div`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};

  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '5px')};
  margin-top: ${({ mt }) => mt && `${mt}px`};
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-right: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const BoxContent = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SButton = styled(Button)`
  background-color: ${({ reject }) =>
    reject ? COLORS.RED : COLORS.GREEN};
  padding: 0 10px;
  height: 40px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

const setStatusColor = (status) => {
  switch (status) {
    case 'reject':
      return COLORS.RED2;
    case 'pending':
      return COLORS.YELLOW;
    default:
      return COLORS.GREEN;
  }
};

export const Status = styled.div`
  border-radius: 100px;
  padding: 5px 12px;
  width: fit-content;
  height: fit-content;

  color: ${COLORS.WHITE};
  background-color: ${({ status }) =>
    Boolean(status) ? setStatusColor(status) : COLORS.GREY3};

  font-size: 14px;
  font-weight: 600;
`;

export const DisableNotificationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 5px;
  border: 0;
  border: 1px solid ${COLORS.GREY5};
  cursor: pointer;
  padding: 0 5px;

  color: ${COLORS.GREY5};
  font-size: 14px;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  & svg {
    margin-right: 5px;
  }
`;
