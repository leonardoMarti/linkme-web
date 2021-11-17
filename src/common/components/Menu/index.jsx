import React from 'react';
import { useHistory } from 'react-router-dom';

import { COLORS } from '../../utils/colors';

import { ConfigIcon } from '../../../assets/svgs/ConfigIcon';
import { UserIcon } from '../../../assets/svgs/UserIcon';
import { SearchIcon } from '../../../assets/svgs/SearchIcon';

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
    {
      name: 'Perfil',
      icon: <UserIcon />,
      page: PAGES.CANDIDATEPROFILE,
    },
    {
      name: 'Busca',
      icon: <SearchIcon />,
      page: PAGES.USERSEARCH,
    },
  ];

  const companyOptions = [
    { name: 'Option 1', icon: <UserIcon />, page: '' },
    { name: 'Option 2', icon: <UserIcon />, page: '' },
  ];

  const configOptions = [
    { name: 'Configurações', icon: <ConfigIcon /> },
  ];

  const redirectTo = async (page) => history.push(page);

  const renderOptions =
    userData?.type === 'trainee' ? traineeOptions : companyOptions;

  return (
    <Container>
      <MenuHeader onClick={() => history.push(PAGES.USERSEARCH)}>
        <Label color={COLORS.GREY2} pointer fs={24} fw={700}>
          LinkMe
        </Label>
      </MenuHeader>
      <OptionsWrapper>
        {renderOptions.map((option, index) => (
          <Option
            key={index}
            onClick={() => redirectTo(option?.page)}
          >
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
