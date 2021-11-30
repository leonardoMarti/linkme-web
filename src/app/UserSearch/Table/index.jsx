import React, { useContext, createContext } from 'react';

import { LevelChip } from '../../../common/components/LevelChip';
import { LinearLoading } from '../../../common/components/LinearLoading';

import { USER_SEARCH } from '../../../common/translate';
import { ENUM_USER_TYPE } from '../../../common/utils/enumerate';
import { setCurrency } from '../../../common/utils/currency';

import {
  TableWrapper,
  Head,
  Divider,
  Column,
  TableRows,
  SectionRow,
  Row,
  CircleUserIcon,
  WithoutResults,
} from './StyledComponents';

import { UserSearchContext } from '../index';

const Context = createContext();

export const Table = () => {
  const { usersData, userType, isLoading, handleOpenDialog } = useContext(UserSearchContext);

  const context = {
    usersData,
    isLoading,
    handleOpenDialog,
  };

  return (
    <Context.Provider value={context}>
      {userType === ENUM_USER_TYPE.trainee ? <TraineeTable /> : <CompanyTable />}
    </Context.Provider>
  );
};

const TraineeTable = () => {
  const { usersData, isLoading, handleOpenDialog } = useContext(Context);

  const traineeColumns = [
    { name: USER_SEARCH.name, space: 1.5 },
    { name: USER_SEARCH.vacancyOfInterest, space: 1 },
    { name: USER_SEARCH.local, space: 1 },
    { name: USER_SEARCH.availability, space: 1 },
    { name: USER_SEARCH.courseTime, space: 1 },
    { name: USER_SEARCH.knowledge, space: 1 },
  ];

  const handleJob = (data) => {
    return data ? data[0]?.job?.name : USER_SEARCH.notInformed;
  };

  const handleAvailability = (data) => {
    const availabilities = data?.map((item) => item?.availability?.name);
    return availabilities?.length ? availabilities.join(' - ') : USER_SEARCH.notInformed;
  };

  const handleCourseTime = (data) => (data ? data[0]?.courseTime?.name : USER_SEARCH.notInformed);

  return (
    <TableWrapper>
      <Head>
        {traineeColumns.map((item, index) => (
          <Column key={index} space={item?.space}>
            {item?.name}
          </Column>
        ))}
      </Head>
      <Divider />
      {isLoading && <LinearLoading />}
      {!usersData?.length && <WithoutResults>{USER_SEARCH.whithoutResults}</WithoutResults>}
      <TableRows>
        {usersData?.map((item, index) => (
          <SectionRow key={index} onClick={() => handleOpenDialog(item)} hasData={item?.candidate}>
            <Row flex={1.5} hasData={item?.name}>
              <CircleUserIcon />
              {item?.name || USER_SEARCH.notInformed}
            </Row>
            <Row flex={1} hasData={handleJob(item?.candidate?.job)}>
              {handleJob(item?.candidate?.job)}
            </Row>
            <Row flex={1} hasData={item?.address?.city}>
              {item?.address?.city || USER_SEARCH.notInformed}
            </Row>
            <Row flex={1} hasData={handleAvailability(item?.candidate?.availability)}>
              {handleAvailability(item?.candidate?.availability)}
            </Row>
            <Row flex={1} hasData={handleCourseTime(item?.candidate?.courseTime)}>
              {handleCourseTime(item?.candidate?.courseTime)}
            </Row>
            <Row flex={1}>
              <LevelChip level={item?.candidate?.job[0]?.level} />
            </Row>
          </SectionRow>
        ))}
      </TableRows>
    </TableWrapper>
  );
};

const CompanyTable = () => {
  const { usersData, isLoading, handleOpenDialog } = useContext(Context);

  const traineeColumns = [
    { name: USER_SEARCH.name, space: 1.5 },
    { name: USER_SEARCH.vacancy, space: 1 },
    { name: USER_SEARCH.local, space: 1 },
    { name: USER_SEARCH.salary, space: 1 },
    { name: USER_SEARCH.quantity, space: 1 },
    { name: USER_SEARCH.knowledge, space: 1 },
  ];

  return (
    <TableWrapper>
      <Head>
        {traineeColumns.map((item, index) => (
          <Column key={index} space={item?.space}>
            {item?.name}
          </Column>
        ))}
      </Head>
      <Divider />
      {isLoading && <LinearLoading />}
      {!usersData?.length && <WithoutResults>{USER_SEARCH.whithoutResults}</WithoutResults>}
      <TableRows>
        {usersData?.map((item, index) => (
          <SectionRow key={index} onClick={() => handleOpenDialog(item)} hasData={item?.vacancy}>
            <Row flex={1.5} hasData={item?.name}>
              <CircleUserIcon />
              {item?.name}
            </Row>
            <Row flex={1} hasData={item?.vacancy?.title}>
              {item?.vacancy?.title || USER_SEARCH.notInformed}
            </Row>
            <Row flex={1} hasData={item?.address?.city}>
              {item?.address?.city || USER_SEARCH.notInformed}
            </Row>
            <Row flex={1} hasData={item?.vacancy?.salary}>
              {setCurrency(item?.vacancy?.salary) || USER_SEARCH.notInformed}
            </Row>
            <Row flex={1} hasData={item?.vacancy?.quantity}>
              {item?.vacancy?.quantity}
            </Row>
            <Row flex={1}>
              <LevelChip level={item?.vacancy?.level} />
            </Row>
          </SectionRow>
        ))}
      </TableRows>
    </TableWrapper>
  );
};
