import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  width: 100%;
  background: #393939;
  padding: 0 30px;

  svg:first-of-type {
    margin-right: 25px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const SideMenu = styled.div`
  width: 25%;
  border-right: 1px solid #e5e5e5;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  height: 22px;
  width: 1px;
  background-color: #a9a9a9;
  margin: 0 22px;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3994ff;
  height: 28px;
  width: 28px;
  border-radius: 20px;
  color: #ffff;
  font-size: 12px;
  font-weight: 600;
`;

export const TitleWrapper = styled.div`
  padding: 17px 0 18px 30px;
  border-bottom: 1px solid #e5e5e5;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #393939;
`;
