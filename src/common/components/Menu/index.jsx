import React from 'react';
import { COLORS } from '../../utils/colors';

import { ConfigIcon } from '../../../assets/svgs/ConfigIcon';
import { UserIcon } from '../../../assets/svgs/UserIcon';

import {
  Container,
  MenuHeader,
  Label,
  OptionsWrapper,
  Option,
  HorizontalDivider,
} from './StyledComponents';

export const Menu = ({ children }) => {
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
    </Container>
  );
};
