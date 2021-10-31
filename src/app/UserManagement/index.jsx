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

import { SortIcon } from '../../assets/svgs/SortIcon';
import { FilterIcon } from '../../assets/svgs/FilterIcon';

import {
  Container,
  Label,
  TableHeader,
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
} from './StyledComponents';

export const Context = createContext();

export const UserManagement = () => {
  const history = useHistory();

  const users = [
    {
      name: 'Josnei',
      job: 'Desenvolvedor fullStack',
      city: 'Florianopolis',
      availability: 'Manhã',
      courseTime: '3 semestres',
      knowledge: 1,
    },
    {
      name: 'Josnei',
      job: 'Desenvolvedor fullStack',
      city: 'Florianopolis',
      availability: 'Manhã',
      courseTime: '3 semestres',
      knowledge: 3,
    },
    {
      name: 'Josnei',
      job: 'Desenvolvedor fullStack',
      city: 'Florianopolis',
      availability: 'Manhã',
      courseTime: '3 semestres',
      knowledge: 2,
    },
  ];

  const findAllCandidates = async () => {
    const response = await CandidateService.findAll();
    console.log('response---', response);
  };

  useEffect(() => {
    findAllCandidates();
  }, []);

  const context = { users };

  return (
    <LayoutStructure>
      <Context.Provider value={context}>
        <Container>
          <Header />
          <Table />
        </Container>
      </Context.Provider>
    </LayoutStructure>
  );
};

const Header = () => {
  // const {} = useContext(Context);

  return (
    <TableHeader>
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
    </TableHeader>
  );
};

const Table = () => {
  const { users } = useContext(Context);

  const traineeColumns = [
    { name: 'Nome', space: 2 },
    { name: 'Vaga de interesse', space: 1 },
    { name: 'Local', space: 1 },
    { name: 'Disponibilidade', space: 1 },
    { name: 'Tempo de curso', space: 1 },
    { name: 'Conhecimento', space: 1 },
  ];

  const findStatusName = (item) =>
    USER_MANAGEMENT_STATUS.find(
      (status) => status.knowledge === item?.knowledge,
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
        {users.map((item, index) => (
          <SectionRow>
            <Row key={index} flex={2}>
              <CircleUserIcon />
              {item?.name}
            </Row>
            <Row flex={1}>{item?.job}</Row>
            <Row flex={1}>{item?.city}</Row>
            <Row flex={1}>{item?.availability}</Row>
            <Row flex={1}>{item?.courseTime}</Row>
            <Row flex={1}>
              <KnowledgeStatus status={item?.knowledge}>
                {findStatusName(item)}
              </KnowledgeStatus>
            </Row>
          </SectionRow>
        ))}
      </TableRows>
    </TableWrapper>
  );
};
