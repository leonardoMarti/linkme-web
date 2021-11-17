import React from 'react';

import { Close } from '../../../assets/svgs/Close';

import { USER_DIALOG } from '../../../common/translate';

import { LevelChip } from '../../../common/components/LevelChip';

import {
  Container,
  Header,
  CloseWrapper,
  CustomDialog,
  NameWrapper,
  CircleUserPlaceholder,
  Box,
  Title,
  Label,
  SButton,
  ButtonWrapper,
  OptionWrapper,
} from './StyledComponents';

export const UserDialog = ({ open, setOpen, data }) => {
  const handleTypeProfile = () =>
    data?.user?.type === 'trainee'
      ? USER_DIALOG.candidateProfile
      : USER_DIALOG.vacancyProfile;

  const handleTypeRegister = () =>
    data?.user?.type === 'trainee'
      ? USER_DIALOG.offerVacancy
      : USER_DIALOG.apply;

  return (
    <CustomDialog open={open} onClose={() => setOpen(!open)}>
      <Container>
        <Header>
          <NameWrapper>
            <CircleUserPlaceholder />
            <Label fw={500} fs={14}>
              {data?.user?.name}
            </Label>
          </NameWrapper>
          <CloseWrapper onClick={() => setOpen(!open)}>
            <Close />
          </CloseWrapper>
        </Header>

        <Label fw={700} fs={19} mb={20}>
          {handleTypeProfile()}
        </Label>

        {data?.user?.address && (
          <Box>
            <Title>{USER_DIALOG.address}</Title>
            <Label>{data?.user?.address?.state}</Label>
            <Label>{data?.user?.address?.city}</Label>
            <Label>{data?.user?.address?.neighborhood}</Label>
          </Box>
        )}
        {data?.job[0] && (
          <Box>
            <Title>{USER_DIALOG.vacancy}</Title>
            <OptionWrapper>
              <Label mr={20}>{data?.job[0]?.job?.name}</Label>
              <LevelChip level={data?.job[0]?.level} />
            </OptionWrapper>
          </Box>
        )}

        {data?.availability && (
          <Box>
            <Title>{USER_DIALOG.availability}</Title>
            {data?.availability.map((item) => (
              <div>
                <Label>{item?.availability?.name}</Label>
              </div>
            ))}
          </Box>
        )}

        {data?.courseTime[0] && (
          <Box>
            <Title>{USER_DIALOG.courseTime}</Title>
            <Label>{data?.courseTime[0]?.courseTime?.name}</Label>
          </Box>
        )}

        {data?.personality && (
          <Box>
            <Title>{USER_DIALOG.personality}</Title>
            {data?.personality.map((item) => (
              <div>
                <Label>{item?.personality?.name}</Label>
              </div>
            ))}
          </Box>
        )}

        {data?.skill && (
          <Box>
            <Title>{USER_DIALOG.skills}</Title>
            {data?.skill.map((item) => (
              <OptionWrapper>
                <Label mr={20}>{item?.skill?.name}</Label>
                <LevelChip level={item?.level} />
              </OptionWrapper>
            ))}
          </Box>
        )}

        {data?.idiom && (
          <Box>
            <Title>{USER_DIALOG.idioms}</Title>
            {data?.idiom.map((item) => (
              <OptionWrapper>
                <Label mr={20}>{item?.idiom?.name}</Label>
                <LevelChip level={item?.level} />
              </OptionWrapper>
            ))}
          </Box>
        )}

        <ButtonWrapper>
          <SButton>{handleTypeRegister()}</SButton>
        </ButtonWrapper>
      </Container>
    </CustomDialog>
  );
};
