import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';
import { MEDIA_QUERIES } from '../../../common/utils/breakPoints';
import { Button } from '../../../common/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;

  ${MEDIA_QUERIES.smDown} {
    margin: 30px 0 30px 0;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;

  ${MEDIA_QUERIES.smDown} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SignInButton = styled(Button)`
  padding: 0 10px;
`;

export const Title = styled.h1`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: 700;
  color: ${COLORS.LIGHT_BLACK};
  margin-bottom: 20px;

  ${MEDIA_QUERIES.smDown} {
    font-size: 30px;
  }
`;

export const Label = styled.div`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;
