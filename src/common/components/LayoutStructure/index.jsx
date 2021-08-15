import React from 'react';
import { COLORS } from '../../utils/colors';

import { ConfigIcon } from '../../../assets/svgs/ConfigIcon';
import { UserIcon } from '../../../assets/svgs/UserIcon';
import { SearchIcon } from '../../../assets/svgs/SearchIcon';
import { NotificationIcon } from '../../../assets/svgs/NotificationIcon';

import {
  Container,
  SideMenu,
  MenuHeader,
  LeftPartHeader,
  RightPartHeader,
  Label,
  OptionsWrapper,
  Option,
  ContentContainer,
  Header,
  HorizontalDivider,
  VerticalDivider,
  IconWrapper,
  CircleUserPlaceholder,
} from './StyledComponents';

export const LayoutStructure = ({ children }) => {
  const optionsFirstPart = [
    { name: 'Option 1', icon: <UserIcon /> },
    { name: 'Option 2', icon: <UserIcon /> },
    { name: 'Option 3', icon: <UserIcon /> },
    { name: 'Option 4', icon: <UserIcon /> },
    { name: 'Option 5', icon: <UserIcon /> },
    { name: 'Option 6', icon: <UserIcon /> },
  ];

  const optionsSecondPart = [
    { name: 'Configurações', icon: <ConfigIcon /> },
  ];

  return (
    <Container>
      <SideMenu>
        <MenuHeader>
          <Label color={COLORS.LIGHT_GREY} fs={24} fw={700}>
            LinkMe
          </Label>
        </MenuHeader>
        <OptionsWrapper>
          {optionsFirstPart.map((option) => (
            <Option>
              {option.icon}
              {option.name}
            </Option>
          ))}
        </OptionsWrapper>
        <HorizontalDivider />
        <OptionsWrapper>
          {optionsSecondPart.map((option) => (
            <Option>
              {option.icon}
              {option.name}
            </Option>
          ))}
        </OptionsWrapper>
      </SideMenu>
      <ContentContainer>
        <Header>
          <LeftPartHeader>
            <Label>Candidatos</Label>
          </LeftPartHeader>
          <RightPartHeader>
            <IconWrapper ml={24}>
              <SearchIcon />
            </IconWrapper>
            <IconWrapper ml={24}>
              <NotificationIcon />
            </IconWrapper>
            <VerticalDivider />
            <Label>Leonardo Martinelli</Label>
            <CircleUserPlaceholder />
          </RightPartHeader>
        </Header>
        {children}
      </ContentContainer>
    </Container>
  );
};
