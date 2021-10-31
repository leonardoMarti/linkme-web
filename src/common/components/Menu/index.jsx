import React from 'react';
import { useHistory } from 'react-router-dom';

import { COLORS } from '../../utils/colors';

import { ConfigIcon } from '../../../assets/svgs/ConfigIcon';
import { UserIcon } from '../../../assets/svgs/UserIcon';

import { PAGES } from '../../../common/pages';

import { useAuth } from '../../../hooks/useAuth';

import {
  Container,
  MenuHeader,
  Label,
  OptionsWrapper,
  Option,
  HorizontalDivider,
} from './StyledComponents';

export const Menu = () => {
  const { user: userData } = useAuth();
  const history = useHistory();

  const traineeOptions = [
    { name: 'Option 1', icon: <UserIcon />, page: PAGES.PROFILE },
  ];

  const companyOptions = [
    { name: 'Option 1', icon: <UserIcon />, page: PAGES.PROFILE },
    { name: 'Option 2', icon: <UserIcon /> },
  ];

  const configOptions = [
    { name: 'Configurações', icon: <ConfigIcon /> },
  ];

  const redirectTo = (page) => history.push(page);

  const renderOptions =
    userData?.user?.type === 'trainee'
      ? traineeOptions
      : companyOptions;

  return (
    <Container>
      <MenuHeader>
        <Label color={COLORS.GREY2} fs={24} fw={700}>
          LinkMe
        </Label>
      </MenuHeader>
      <OptionsWrapper>
        {renderOptions.map((option, index) => (
          <Option key={index} onClick={() => redirectTo(option.page)}>
            {option.icon}
            {option.name}
          </Option>
        ))}
      </OptionsWrapper>
      <HorizontalDivider />
      <OptionsWrapper>
        {configOptions.map((option, index) => (
          <Option key={index}>
            {option.icon}
            {option.name}
          </Option>
        ))}
      </OptionsWrapper>
    </Container>
  );
};
