import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { NotificationIcon } from '../../../assets/svgs/NotificationIcon';

import { PAGES } from '../../pages';

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
  const history = useHistory();

  const handleTitles = (pathname) =>
    pathname ? HEADER.find((item) => item.url === pathname).name : '';

  const redirectToNotifications = () =>
    history.push(PAGES.NOTIFICATION);

  return (
    <Container>
      <LeftPartHeader>
        <Label>{handleTitles(location?.pathname)}</Label>
      </LeftPartHeader>
      <RightPartHeader>
        <IconWrapper onClick={redirectToNotifications}>
          <NotificationIcon />
        </IconWrapper>
        <VerticalDivider />
        <Label>{data?.name || 'Usuário'}</Label>
        <CircleUserPlaceholder />
      </RightPartHeader>
    </Container>
  );
};
