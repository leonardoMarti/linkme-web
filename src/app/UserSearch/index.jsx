import React, {
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';

import { LayoutStructure } from '../../common/components/LayoutStructure';
import { LevelChip } from '../../common/components/LevelChip';

import { CandidateService } from '../../common/services/candidateService';

import { USER_MANAGEMENT } from '../../common/translate';

import { COLORS } from '../../common/utils/colors';

import { SortIcon } from '../../assets/svgs/SortIcon';
import { FilterIcon } from '../../assets/svgs/FilterIcon';
import { ArrowLeft } from '../../assets/svgs/ArrowLeft';
import { ArrowRight } from '../../assets/svgs/ArrowRight';

import { UserDialog } from './UserDialog';

import {
  Container,
  Label,
  Header,
  ActionWrapper,
  Action,
  TableWrapper,
  Head,
  Divider,
  Column,
  TableRows,
  SectionRow,
  Row,
  CircleUserIcon,
  Footer,
  Limit,
  LimitSelected,
  Offset,
} from './StyledComponents';

export const Context = createContext();

export const UserSearch = () => {
  const [usersData, setUsersData] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const findAllCandidates = async () => {
    const { data } = await CandidateService.findAll({
      limit,
      offset,
    });
    if (data?.length) setUsersData(data);
  };

  useEffect(() => {
    findAllCandidates();
  }, [limit, offset]);

  useEffect(() => {
    setOffset(0);
  }, [limit]);

  const handleOpenDialog = (data) => {
    setSelectedUser(data);
    setOpenDrawer(!openDrawer);
  };

  const context = {
    usersData,
    limit,
    setLimit,
    offset,
    setOffset,
    handleOpenDialog,
  };

  return (
    <LayoutStructure>
      <Context.Provider value={context}>
        <Container>
          <div>
            <TableHeader />
            <Table />
          </div>
          <TableFooter />
        </Container>
        <UserDialog
          open={openDrawer}
          setOpen={setOpenDrawer}
          data={selectedUser}
        />
      </Context.Provider>
    </LayoutStructure>
  );
};

const TableHeader = () => {
  return (
    <Header>
      <Label fs={19} fw={700}>
        {USER_MANAGEMENT.searchForTrainees}
      </Label>
      <ActionWrapper>
        <Action mr={32}>
          <SortIcon /> {USER_MANAGEMENT.order}
        </Action>
        <Action>
          <FilterIcon /> {USER_MANAGEMENT.filter}
        </Action>
      </ActionWrapper>
    </Header>
  );
};

const TableFooter = () => {
  const { limit, setLimit, offset, setOffset } = useContext(Context);

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
          {USER_MANAGEMENT.totalResults}
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

const Table = () => {
  const { usersData, handleOpenDialog } = useContext(Context);

  const traineeColumns = [
    { name: USER_MANAGEMENT.name, space: 1.5 },
    { name: USER_MANAGEMENT.vacancyOfInterest, space: 1 },
    { name: USER_MANAGEMENT.local, space: 1 },
    { name: USER_MANAGEMENT.availability, space: 1 },
    { name: USER_MANAGEMENT.courseTime, space: 1 },
    { name: USER_MANAGEMENT.knowledge, space: 1 },
  ];

  const handleJob = (data) => data[0]?.job?.name;

  const handleAvailability = (data) => {
    const availabilities = data.map(
      (item) => item?.availability?.name,
    );
    return availabilities?.length
      ? availabilities.join(' - ')
      : false;
  };

  const handleCourseTime = (data) => data[0]?.courseTime?.name;

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
      <TableRows>
        {usersData?.map((item, index) => (
          <SectionRow
            key={index}
            onClick={() => handleOpenDialog(item)}
          >
            <Row flex={1.5} hasData={item?.user?.name}>
              <CircleUserIcon />
              {item?.user?.name || USER_MANAGEMENT.notInformed}
            </Row>
            <Row flex={1} hasData={handleJob(item?.job)}>
              {handleJob(item?.job) || USER_MANAGEMENT.notInformed}
            </Row>
            <Row flex={1} hasData={item?.user?.address?.city}>
              {item?.user?.address?.city ||
                USER_MANAGEMENT.notInformed}
            </Row>
            <Row
              flex={1}
              hasData={handleAvailability(item?.availability)}
            >
              {handleAvailability(item?.availability) ||
                USER_MANAGEMENT.notInformed}
            </Row>
            <Row
              flex={1}
              hasData={handleCourseTime(item?.courseTime)}
            >
              {handleCourseTime(item?.courseTime) ||
                USER_MANAGEMENT.notInformed}
            </Row>
            <Row flex={1}>
              <LevelChip level={item?.job[0]?.level} />
            </Row>
          </SectionRow>
        ))}
      </TableRows>
    </TableWrapper>
  );
};
