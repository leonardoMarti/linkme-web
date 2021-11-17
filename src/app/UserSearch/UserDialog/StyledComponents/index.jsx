import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { COLORS } from '../../../../common/utils/colors';
import { Button } from '../../../../common/components/Button';

export const CustomDialog = withStyles((theme) => ({
  paper: {
    width: 'calc(100% - 100px)',
    height: 'fit-content',
    maxWidth: '100%',
    backgroundColor: '#F5F6F7',
  },
}))(Dialog);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 20px;
`;

export const Label = styled.div`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};

  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
  padding: 5px;

  color: ${COLORS.WHITE};

  transition: background-color 0.2s;

  & svg {
    &:hover {
      background-color: rgba(164, 166, 179, 0.1);
      border-radius: 30px;
    }
  }
`;

export const CircleUserPlaceholder = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 25px;
  margin-right: 15px;
  background-color: ${COLORS.GREY3};
  cursor: pointer;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
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

export const SButton = styled(Button)`
  background-color: ${COLORS.BLUE2};
  padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
