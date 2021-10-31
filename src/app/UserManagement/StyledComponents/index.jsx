import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.WHITE2};
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 48px 32px;
`;

export const ActionWrapper = styled.div`
  display: flex;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;

  margin-right: ${({ mr }) => mr && `${mr}px`};

  cursor: pointer;

  & svg {
    margin-right: 8px;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${COLORS.GREY4};
`;

export const Head = styled.div`
  display: flex;
  padding: 12px 30px;
`;

export const Column = styled.div`
  display: flex;
  flex: ${({ space }) => space};

  color: ${COLORS.GREY4};
  font-size: 14px;
  font-weight: bold;
`;

export const TableRows = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${COLORS.GREY4};
  padding: 24px 30px;
`;

export const Row = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;

  padding-right: 10px;

  font-size: 14px;
  font-weight: 600;
`;

export const CircleUserIcon = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  background-color: ${COLORS.GREY3};
  cursor: pointer;
`;

const setStatusColor = (status) => {
  switch (status) {
    case 1:
      return COLORS.RED2;
    case 2:
      return COLORS.YELLOW;
    default:
      return COLORS.GREEN;
  }
};

export const KnowledgeStatus = styled.div`
  border-radius: 100px;
  padding: 5px 12px;

  color: ${COLORS.WHITE};
  background-color: ${({ status }) => setStatusColor(status)};

  font-size: 14px;
  font-weight: 600;
`;
