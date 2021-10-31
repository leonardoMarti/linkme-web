import React from 'react';
import { LayoutStructure } from '../../common/components/LayoutStructure';

import { Container, TitleWrapper } from './StyledComponents';

export const Profile = () => {
  return (
    <LayoutStructure>
      <Container>
        <TitleWrapper>PROFILE</TitleWrapper>
      </Container>
    </LayoutStructure>
  );
};
