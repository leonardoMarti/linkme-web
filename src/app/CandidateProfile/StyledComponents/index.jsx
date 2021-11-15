import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';
import { Input } from '../../../common/components/Input';
import { Select } from '../../../common/components/Select';

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

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  margin-bottom: 10px;
  margin-right: ${({ mr }) => mr && `${mr}px`};
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

export const SInput = styled(Input)`
  max-width: ${({ mw }) => mw && `${mw}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

export const SSelect = styled(Select)`
  max-width: ${({ mw }) => mw && `${mw}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${({ fd }) => fd};
  flex-wrap: ${({ fw }) => fw};
  justify-content: ${({ jc }) => jc};
`;

export const ChipWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Chip = styled.div`
  border-radius: 100px;
  padding: 5px 12px;
  width: fit-content;

  color: ${COLORS.GREY4};
  background-color: ${COLORS.GREY3};

  font-size: 14px;
  font-weight: 600;

  margin-right: 15px;
`;
