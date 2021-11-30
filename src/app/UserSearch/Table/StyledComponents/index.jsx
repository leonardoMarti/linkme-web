import styled from 'styled-components';
import { COLORS } from '../../../../common/utils/colors';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${COLORS.GREY3};
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
  display: ${({ hasData }) => (hasData ? 'flex' : 'none')};
  border-bottom: 1px solid ${COLORS.GREY3};
  padding: 24px 30px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(164, 166, 179, 0.1);
  }
`;

export const Row = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;

  padding-right: 10px;

  font-size: 14px;
  font-weight: 500;
  color: ${({ hasData }) => Boolean(!hasData) && COLORS.GREY5};
`;

export const CircleUserIcon = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  background-color: ${COLORS.GREY3};
  cursor: pointer;
  margin-right: 5px;
`;

export const FilterContainer = styled.div`
  display: flex;
`;

export const WithoutResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 19px;
  font-weight: 700;
`;
