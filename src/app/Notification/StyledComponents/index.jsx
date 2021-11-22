import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';

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
  margin-bottom: 30px;
`;

export const BoxHeader = styled.div`
  display: flex;
`;

export const BoxContent = styled.div`
  display: flex;
`;
