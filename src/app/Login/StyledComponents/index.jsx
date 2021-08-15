import styled from 'styled-components';
import { COLORS } from '../../../common/utils/colors';
import { MEDIA_QUERIES } from '../../../common/utils/breakPoints';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Aside = styled.aside`
  display: flex;
  flex: 3;

  ${MEDIA_QUERIES.smDown} {
    display: none;
  }
`;

export const BackgroundLogo = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.LIGHT_BLACK};
  width: 315px;
  margin-left: 50px;
  padding-top: 30px;
`;

export const Main = styled.main`
  display: flex;
  flex: 7;
  flex-direction: column;
  margin: 0 30px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px;

  ${MEDIA_QUERIES.smDown} {
    margin: 30px 0 30px 0;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  border: 0.5px solid ${COLORS.LIGHT_GREY};
  padding: 0 10px;
  width: 100%;

  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 650px;

  ${MEDIA_QUERIES.smDown} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.LIGHT_BLACK};
  height: 50px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;

  padding: ${({ pd }) => pd && pd};

  color: ${COLORS.WHITE};
  font-size: 18px;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: ${COLORS.LIGHT_BLACK};
  margin-bottom: 20px;

  ${MEDIA_QUERIES.smDown} {
    font-size: 30px;
  }
`;

export const Label = styled.label`
  font-size: ${({ fs }) => fs && `${fs}px`};
  font-weight: ${({ fw }) => fw && `${fw}`};
  color: ${({ color }) => color && color};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  cursor: ${({ pointer }) => pointer && 'pointer'};
`;

export const ForgotPasswordLink = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${COLORS.BLUE_LINK};
  text-decoration: underline;
  font-size: 12px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const CreateAccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileTitle = styled.div`
  display: none;

  ${MEDIA_QUERIES.smDown} {
    display: flex;
    font-size: 30px;
    font-weight: 700;
    color: ${COLORS.LIGHT_BLACK};
  }
`;
