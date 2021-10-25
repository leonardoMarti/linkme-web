import React from 'react';

import { SearchIcon } from '../../../assets/svgs/SearchIcon';
import { NotificationIcon } from '../../../assets/svgs/NotificationIcon';

import { useAuth } from '../../../hooks/useAuth';

import {
  Container,
  LeftPartHeader,
  RightPartHeader,
  Label,
  VerticalDivider,
  IconWrapper,
  CircleUserPlaceholder,
} from './StyledComponents';

export const Header = () => {
  const { user: data } = useAuth();

  return (
    <Container>
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
        <Label>{data?.user?.name || 'Usuário'}</Label>
        <CircleUserPlaceholder />
      </RightPartHeader>
    </Container>
  );
};
