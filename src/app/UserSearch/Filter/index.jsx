import React, { useContext, createContext } from 'react';
import Drawer from '@mui/material/Drawer';

import { ENUM_USER_TYPE } from '../../../common/utils/enumerate';
import { USER_SEARCH, USER_TYPE } from '../../../common/translate';
import { STATES } from '../../../common/utils/states';

import { useSelectOptions } from '../../../hooks/useSelectOptions';

import { UserSearchContext } from '../index';

import {
  Container,
  Label,
  Divider,
  UserTypeWrapper,
  UserTypeButton,
  SSelect,
  SInput,
  SButton,
  Option,
} from './StyledComponents';

export const FilterContext = createContext();

export const Filter = () => {
  const { jobList, availabilityList, courseTimeList, personalityList, skillList, idiomList } = useSelectOptions();

  const {
    setCompanyName,
    setVacancyTitle,
    setVancacyLevel,
    setTraineeName,
    setJob,
    setJobLevel,
    setState,
    setAvailability,
    setCourseTime,
    openFilter,
    userType,
    setUserType,
    handleOpenFilter,
  } = useContext(UserSearchContext);

  const handleCleanFields = () => {
    setTraineeName('');
    setJob('');
    setJobLevel('');
    setState('');
    setAvailability('');
    setCourseTime('');

    setCompanyName('');
    setVacancyTitle('');
    setVancacyLevel('');
  };

  const handleChangeUserType = (type) => {
    setUserType(type);
    handleCleanFields();
  };

  const knowledgeList = [
    { value: 1, label: 'Baixo' },
    { value: 2, label: 'Intermediário' },
    { value: 3, label: 'Alto' },
  ];

  const context = {
    jobList,
    availabilityList,
    courseTimeList,
    personalityList,
    skillList,
    idiomList,
    knowledgeList,
    userType,
    setTraineeName,
    setJob,
    setJobLevel,
    setState,
    setAvailability,
    setCourseTime,
    setCompanyName,
    setVacancyTitle,
    setVancacyLevel,
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
                onClick={() => handleChangeUserType(ENUM_USER_TYPE.company)}
                type={userType === ENUM_USER_TYPE.company}
              >
                {USER_TYPE.company}
              </UserTypeButton>
              <Divider />
              <UserTypeButton
                onClick={() => handleChangeUserType(ENUM_USER_TYPE.trainee)}
                type={userType === ENUM_USER_TYPE.trainee}
              >
                {USER_TYPE.trainee}
              </UserTypeButton>
            </UserTypeWrapper>
          </div>
          {userType === ENUM_USER_TYPE.trainee ? <TraineeOptions /> : <CompanyOptions />}
          <SButton onClick={() => handleCleanFields()}>Limpar</SButton>
        </Container>
      </Drawer>
    </FilterContext.Provider>
  );
};

const TraineeOptions = () => {
  const {
    setTraineeName,
    setJob,
    setJobLevel,
    setState,
    setAvailability,
    setCourseTime,
    jobList,
    availabilityList,
    courseTimeList,
    knowledgeList,
  } = useContext(FilterContext);

  return (
    <div>
      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.name}
        </Label>
        <SInput placeholder={USER_SEARCH.traineeNamePlaceholder} onChange={(e) => setTraineeName(e.target.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.vacancyOfInterest}
        </Label>
        <SSelect placeholder={USER_SEARCH.selectPlaceholder} options={jobList} onChange={(e) => setJob(e.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.state}
        </Label>
        <SSelect placeholder={USER_SEARCH.selectPlaceholder} options={STATES} onChange={(e) => setState(e.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.availability}
        </Label>
        <SSelect
          placeholder={USER_SEARCH.selectPlaceholder}
          options={availabilityList}
          onChange={(e) => setAvailability(e.value)}
        />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.courseTime}
        </Label>
        <SSelect
          placeholder={USER_SEARCH.selectPlaceholder}
          options={courseTimeList}
          onChange={(e) => setCourseTime(e.value)}
        />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.knowledge}
        </Label>
        <SSelect
          placeholder={USER_SEARCH.selectPlaceholder}
          options={knowledgeList}
          onChange={(e) => setJobLevel(e.value)}
        />
      </Option>
    </div>
  );
};

const CompanyOptions = () => {
  const { setCompanyName, setVacancyTitle, setState, setVancacyLevel, knowledgeList } = useContext(FilterContext);

  return (
    <div>
      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.name}
        </Label>
        <SInput placeholder={USER_SEARCH.companyNamePlaceholder} onChange={(e) => setCompanyName(e.target.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.vacancy}
        </Label>
        <SInput placeholder={USER_SEARCH.vacancyNamePlaceholder} onChange={(e) => setVacancyTitle(e.target.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.state}
        </Label>
        <SSelect placeholder={USER_SEARCH.selectPlaceholder} options={STATES} onChange={(e) => setState(e.value)} />
      </Option>

      <Option>
        <Label fs={14} fw={500}>
          {USER_SEARCH.knowledge}
        </Label>
        <SSelect
          placeholder={USER_SEARCH.selectPlaceholder}
          options={knowledgeList}
          onChange={(e) => setVancacyLevel(e.value)}
        />
      </Option>
    </div>
  );
};
