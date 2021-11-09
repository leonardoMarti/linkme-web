import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';
import { Input } from '../../../common/components/Input';

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

  padding: 32px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

export const SInput = styled(Input)`
  min-width: 250px;
`;

export const Email = styled.div`
  height: 50px;
  width: 100%;
  min-width: 250px;

  border-radius: 5px;
  border: 0.5px solid #a9a9a9;
  padding: 10px;
`;
