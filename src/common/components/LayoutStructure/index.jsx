import React from "react";
import { LogoZallpy } from "../../../assets/svgs/LogoZallpy";
import { MenuIcon } from "../../../assets/svgs/MenuIcon";
import { ConfigIcon } from "../../../assets/svgs/ConfigIcon";

import {
  Container,
  ContentContainer,
  SideMenu,
  Header,
  Label,
  TitleWrapper,
  FlexDiv,
  UserIcon,
  Divider,
} from "./StyledComponents";

export const LayoutStructure = ({ children }) => {
  return (
    <Container>
      <Header>
        <FlexDiv>
          <LogoZallpy />
          <MenuIcon />
        </FlexDiv>
        <FlexDiv>
          <UserIcon>AD</UserIcon>
          <Divider />
          <ConfigIcon />
        </FlexDiv>
      </Header>
      <ContentContainer>
        <SideMenu>
          <TitleWrapper>
            <Label>SideMenu</Label>
          </TitleWrapper>
        </SideMenu>
        <div>{children}</div>
      </ContentContainer>
    </Container>
  );
};
