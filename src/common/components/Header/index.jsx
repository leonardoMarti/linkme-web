import React from 'react';
import { useLocation } from 'react-router-dom';

import { NotificationIcon } from '../../../assets/svgs/NotificationIcon';

import { HEADER } from '../../translate';

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
  const location = useLocation();

  const handleTitles = (pathname) =>
    pathname ? HEADER.find((item) => item.url === pathname).name : '';

  return (
    <Container>
      <LeftPartHeader>
        <Label>{handleTitles(location?.pathname)}</Label>
      </LeftPartHeader>
      <RightPartHeader>
        <IconWrapper ml={24}>
          <NotificationIcon />
        </IconWrapper>
        <VerticalDivider />
        <Label>{data?.name || 'Usuário'}</Label>
        <CircleUserPlaceholder />
      </RightPartHeader>
    </Container>
  );
};
