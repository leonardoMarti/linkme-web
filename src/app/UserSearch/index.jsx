import React, { useEffect, useState, useContext, createContext } from 'react';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { UserService } from '../../common/services/userService';

import { USER_SEARCH } from '../../common/translate';
import { ENUM_USER_TYPE } from '../../common/utils/enumerate';
import { COLORS } from '../../common/utils/colors';

import { FilterIcon } from '../../assets/svgs/FilterIcon';
import { ArrowLeft } from '../../assets/svgs/ArrowLeft';
import { ArrowRight } from '../../assets/svgs/ArrowRight';

import { UserDialog } from './UserDialog';
import { Table } from './Table';
import { Filter } from './Filter';

import {
  Container,
  Label,
  Header,
  ActionWrapper,
  Action,
  Footer,
  Limit,
  LimitSelected,
  Offset,
} from './StyledComponents';

export const UserSearchContext = createContext();

export const UserSearch = () => {
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [userType, setUserType] = useState(ENUM_USER_TYPE.company);
  const [traineeName, setTraineeName] = useState();
  const [job, setJob] = useState();
  const [jobLevel, setJobLevel] = useState();
  const [state, setState] = useState();
  const [availability, setAvailability] = useState();
  const [courseTime, setCourseTime] = useState();

  const [companyName, setCompanyName] = useState();
  const [vacancyTitle, setVacancyTitle] = useState();
  const [vancacyLevel, setVancacyLevel] = useState();

  const findUsersByQuery = async () => {
    setIsLoading(true);
    const { data } = await UserService.findByQuery({
      limit,
      offset,
      type: userType,
      traineeName,
      job,
      jobLevel,
      state,
      availability,
      courseTime,
      companyName,
      vacancyTitle,
      vancacyLevel,
    });
    console.log('findUsersByQuery', data);

    setIsLoading(false);

    return data?.length ? setUsersData(data) : setUsersData([]);
  };

  useEffect(() => {
    findUsersByQuery();
  }, [
    limit,
    offset,
    userType,
    traineeName,
    job,
    jobLevel,
    state,
    availability,
    courseTime,
    companyName,
    vacancyTitle,
    vancacyLevel,
  ]);

  useEffect(() => {
    setOffset(0);
  }, [limit]);

  const handleOpenDialog = (data) => {
    setSelectedUser(data);
    setOpenDrawer(!openDrawer);
  };

  const handleOpenFilter = () => setOpenFilter(!openFilter);

  const context = {
    usersData,
    isLoading,
    limit,
    setLimit,
    offset,
    setOffset,
    openFilter,
    setOpenFilter,
    openDrawer,
    setOpenDrawer,
    selectedUser,
    userType,
    setUserType,
    setTraineeName,
    setJob,
    setJobLevel,
    setState,
    setAvailability,
    setCourseTime,
    setCompanyName,
    setVacancyTitle,
    setVancacyLevel,
    handleOpenFilter,
    handleOpenDialog,
  };

  return (
    <LayoutStructure>
      <UserSearchContext.Provider value={context}>
        <Container>
          <div>
            <TableHeader />
            <Table />
          </div>
          <TableFooter />
        </Container>
        <UserDialog />
        <Filter />
      </UserSearchContext.Provider>
    </LayoutStructure>
  );
};

const TableHeader = () => {
  const { userType, handleOpenFilter } = useContext(UserSearchContext);

  return (
    <Header>
      <Label fs={19} fw={700}>
        {userType === ENUM_USER_TYPE.trainee ? USER_SEARCH.searchForTrainees : USER_SEARCH.searchForCompanies}
      </Label>
      <ActionWrapper>
        <Action onClick={() => handleOpenFilter()}>
          <FilterIcon /> {USER_SEARCH.filter}
        </Action>
      </ActionWrapper>
    </Header>
  );
};

const TableFooter = () => {
  const { limit, setLimit, offset, setOffset } = useContext(UserSearchContext);

  const limitOptions = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
    { value: 20, label: 20 },
    { value: 25, label: 25 },
  ];

  return (
    <Footer>
      <Limit>
        <Label fs={14} color={COLORS.GREY4} mr={10}>
          {USER_SEARCH.totalResults}
        </Label>

        <LimitSelected
          className={'limit'}
          options={limitOptions}
          placeholder={''}
          value={limitOptions.find((item) => item.value === limit)}
          onChange={(e) => setLimit(e.value)}
          menuPlacement={'top'}
        />
      </Limit>
      <Offset onClick={() => setOffset(Math.abs(limit - offset))}>
        <ArrowLeft />
      </Offset>
      <Offset onClick={() => setOffset(limit + offset)}>
        <ArrowRight />
      </Offset>
    </Footer>
  );
};
