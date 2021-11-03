import React, {
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import { useHistory } from 'react-router-dom';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { CandidateService } from '../../common/services/candidateService';

import { USER_MANAGEMENT_STATUS } from '../../common/translate';

import { COLORS } from '../../common/utils/colors';

import { SortIcon } from '../../assets/svgs/SortIcon';
import { FilterIcon } from '../../assets/svgs/FilterIcon';
import { ArrowDownIcon } from '../../assets/svgs/ArrowDownIcon';

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
  KnowledgeStatus,
  Footer,
  Limit,
  LimitSelected,
  Offset,
} from './StyledComponents';

export const Context = createContext();

export const UserManagement = () => {
  const history = useHistory();

  const [userData, setUserData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [increaseLimit, setIncreaseLimit] = useState(limit);

  const findAllCandidates = async () => {
    const { data } = await CandidateService.findAll({
      limit,
      offset: 0,
    });
    if (data?.length) setUserData(data);
  };

  useEffect(() => {
    findAllCandidates();
  }, [limit, increaseLimit]);

  const context = {
    userData,
    limit,
    setLimit,
    increaseLimit,
    setIncreaseLimit,
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
      </Context.Provider>
    </LayoutStructure>
  );
};

const TableHeader = () => {
  return (
    <Header>
      <Label fs={19} fw={700}>
        Busca por estágiarios
      </Label>
      <ActionWrapper>
        <Action mr={32}>
          <SortIcon /> Ordenar
        </Action>
        <Action>
          <FilterIcon /> Filtrar
        </Action>
      </ActionWrapper>
    </Header>
  );
};

const TableFooter = () => {
  const { limit, setLimit, increaseLimit, setIncreaseLimit } =
    useContext(Context);

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
          Total de resultados
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
      <Offset onClick={() => setLimit(limit * 2)}>
        <Label fs={14} color={COLORS.GREY4} mr={10} pointer>
          Carregar mais
        </Label>

        <ArrowDownIcon />
      </Offset>
    </Footer>
  );
};

const Table = () => {
  const { userData } = useContext(Context);

  const traineeColumns = [
    { name: 'Nome', space: 1.5 },
    { name: 'Vaga de interesse', space: 1 },
    { name: 'Local', space: 1 },
    { name: 'Disponibilidade', space: 1 },
    { name: 'Tempo de curso', space: 1 },
    { name: 'Conhecimento', space: 1 },
  ];

  const handleAddress = (data) => data?.city;

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

  const handleKnowledgeNote = (item) =>
    USER_MANAGEMENT_STATUS.find(
      (status) => status?.knowledge === item,
    )?.name;

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
        {userData?.map((item, index) => (
          <SectionRow key={index}>
            <Row flex={1.5} hasData={item?.user?.name}>
              <CircleUserIcon />
              {item?.user?.name || 'Não informado'}
            </Row>
            <Row flex={1} hasData={handleJob(item?.job)}>
              {handleJob(item?.job) || 'Não informado'}
            </Row>
            <Row
              flex={1}
              hasData={handleAddress(item?.user?.address)}
            >
              {handleAddress(item?.user?.address) || 'Não informado'}
            </Row>
            <Row
              flex={1}
              hasData={handleAvailability(item?.availability)}
            >
              {handleAvailability(item?.availability) ||
                'Não informado'}
            </Row>
            <Row
              flex={1}
              hasData={handleCourseTime(item?.courseTime)}
            >
              {handleCourseTime(item?.courseTime) || 'Não informado'}
            </Row>
            <Row flex={1}>
              <KnowledgeStatus status={2}>
                {handleKnowledgeNote(2)}
              </KnowledgeStatus>
            </Row>
          </SectionRow>
        ))}
      </TableRows>
    </TableWrapper>
  );
};
