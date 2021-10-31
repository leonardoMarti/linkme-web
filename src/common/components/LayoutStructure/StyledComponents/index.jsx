import styled from 'styled-components';
import { COLORS } from '../../../utils/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${COLORS.WHITE2};

  margin-left: 255px;
`;

export const Children = styled.div`
  display: flex;
  flex: 1;

  background-color: ${COLORS.WHITE2};
  margin: 134px 30px 30px 30px;
`;
