import React, { useEffect, useState, useContext, createContext } from 'react';
import Drawer from '@mui/material/Drawer';

import { ENUM_USER_TYPE } from '../../../common/utils/enumerate';
import { USER_SEARCH, USER_TYPE } from '../../../common/translate';

import { UserSearchContext } from '../index';

import { Container, Label, Divider, UserTypeWrapper, UserTypeButton, SSelect, Option } from './StyledComponents';

export const FilterContext = createContext();

export const Filter = () => {
  const { openFilter, userType, setUserType, handleOpenFilter } = useContext(UserSearchContext);

  const list = [
    { value: 1, label: 'Vai' },
    { value: 2, label: 'Vou' },
  ];

  const context = {
    userType,
    list,
  };

  return (
    <FilterContext.Provider value={context}>
      <Drawer anchor="right" open={openFilter} onClose={handleOpenFilter}>
        <Container>
          <div>
            <Label fs={19} fw={700} mb={10}>
              {USER_SEARCH.userType}
            </Label>
            <UserTypeWrapper>
              <UserTypeButton
                onClick={() => setUserType(ENUM_USER_TYPE.company)}
                type={userType === ENUM_USER_TYPE.company}
              >
                {USER_TYPE.company}
              </UserTypeButton>
              <Divider />
              <UserTypeButton
                onClick={() => setUserType(ENUM_USER_TYPE.trainee)}
                type={userType === ENUM_USER_TYPE.trainee}
              >
                {USER_TYPE.trainee}
              </UserTypeButton>
            </UserTypeWrapper>
          </div>
          {userType === ENUM_USER_TYPE.trainee ? <TraineeOptions /> : <CompanyOptions />}
        </Container>
      </Drawer>
    </FilterContext.Provider>
  );
};

const TraineeOptions = () => {
  const { list } = useContext(FilterContext);

  return (
    <div>
      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.name}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.vacancyOfInterest}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.address}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.availability}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.courseTime}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.knowledge}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>
    </div>
  );
};

const CompanyOptions = () => {
  const { list } = useContext(FilterContext);

  return (
    <div>
      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.name}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.vacancy}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.address}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.salary}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.quantity}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.knowledge}
        </Label>
        <SSelect placeholder="Selecione" options={list} />
      </Option>
    </div>
  );
};
