import React from 'react';

import { Menu } from '../Menu';
import { Header } from '../Header';

import { Container, Content, Children } from './StyledComponents';

export const LayoutStructure = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>
        <Header />
        <Children>{children}</Children>
      </Content>
    </Container>
  );
};
