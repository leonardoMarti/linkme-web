import React, { useContext, createContext } from 'react';

import { Close } from '../../../assets/svgs/Close';

import { USER_DIALOG } from '../../../common/translate';
import { ENUM_USER_TYPE, ENUM_SOLICITATION_STATUS } from '../../../common/utils/enumerate';
import { setCurrency } from '../../../common/utils/currency';

import { LevelChip } from '../../../common/components/LevelChip';
import { SnackBar } from '../../../common/components/SnackBar';

import { SolicitationService } from '../../../common/services/solicitationService';

import { useAuth } from '../../../hooks/useAuth';

import { UserSearchContext } from '../index';

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
  FlexWrapper,
} from './StyledComponents';

const Context = createContext();

export const UserDialog = () => {
  const { openDrawer, setOpenDrawer, selectedUser } = useContext(UserSearchContext);

  const { user } = useAuth();

  const isTrainee = (type) => type === ENUM_USER_TYPE.trainee;

  const handleTypeProfile = () =>
    isTrainee(selectedUser?.type) ? USER_DIALOG.candidateProfile : USER_DIALOG.vacancyProfile;

  const handleTypeRegister = () => (isTrainee(selectedUser?.type) ? USER_DIALOG.offerVacancy : USER_DIALOG.apply);

  const assign = async () => {
    try {
      await SolicitationService.save({
        userId: isTrainee(user?.type) ? user?.id : selectedUser?.id,
        vacancyId: isTrainee(user?.type) ? selectedUser?.vacancy?.id : user?.vacancy?.id,
        sentBy: user?.type,
        status: ENUM_SOLICITATION_STATUS.pending,
      });

      SnackBar.SUCCESS('Solicitação enviada!');
    } catch (e) {
      console.log('ERROR', e);
      SnackBar.WARNING(e?.data?.error);
    }
  };

  const context = {
    selectedUser,
    user,
    handleTypeRegister,
    assign,
  };

  return (
    <Context.Provider value={context}>
      <CustomDialog open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
        <Container>
          <Header>
            <NameWrapper>
              <CircleUserPlaceholder />
              <Label fw={500} fs={14}>
                {selectedUser?.name}
              </Label>
            </NameWrapper>
            <CloseWrapper onClick={() => setOpenDrawer(!openDrawer)}>
              <Close />
            </CloseWrapper>
          </Header>

          <Label fw={700} fs={19} mb={20}>
            {handleTypeProfile()}
          </Label>

          {selectedUser?.type === ENUM_USER_TYPE.trainee ? <Trainee /> : <Company />}

          {selectedUser?.type !== user?.type && (
            <ButtonWrapper>
              <SButton onClick={() => assign()}>{handleTypeRegister()}</SButton>
            </ButtonWrapper>
          )}
        </Container>
      </CustomDialog>
    </Context.Provider>
  );
};

const Trainee = () => {
  const { selectedUser } = useContext(Context);

  return (
    <>
      {selectedUser?.address && (
        <Box>
          <Title>{USER_DIALOG.address}</Title>
          <Label>{selectedUser?.address?.state}</Label>
          <Label>{selectedUser?.address?.city}</Label>
          <Label>{selectedUser?.address?.neighborhood}</Label>
        </Box>
      )}
      {selectedUser?.candidate?.job[0] && (
        <Box>
          <Title>{USER_DIALOG.vacancyOfInterest}</Title>
          <OptionWrapper>
            <Label mr={20}>{selectedUser?.candidate?.job[0]?.job?.name}</Label>
            <LevelChip level={selectedUser?.candidate?.job[0]?.level} />
          </OptionWrapper>
        </Box>
      )}

      {selectedUser?.candidate?.availability && (
        <Box>
          <Title>{USER_DIALOG.availability}</Title>
          {selectedUser?.candidate?.availability.map((item) => (
            <div>
              <Label>{item?.availability?.name}</Label>
            </div>
          ))}
        </Box>
      )}

      {selectedUser?.candidate?.courseTime[0] && (
        <Box>
          <Title>{USER_DIALOG.courseTime}</Title>
          <Label>{selectedUser?.candidate?.courseTime[0]?.courseTime?.name}</Label>
        </Box>
      )}

      {selectedUser?.candidate?.personality && (
        <Box>
          <Title>{USER_DIALOG.personality}</Title>
          {selectedUser?.candidate?.personality.map((item) => (
            <div>
              <Label>{item?.personality?.name}</Label>
            </div>
          ))}
        </Box>
      )}

      {selectedUser?.candidate?.skill && (
        <Box>
          <Title>{USER_DIALOG.skills}</Title>
          {selectedUser?.candidate?.skill.map((item) => (
            <OptionWrapper>
              <Label mr={20}>{item?.skill?.name}</Label>
              <LevelChip level={item?.level} />
            </OptionWrapper>
          ))}
        </Box>
      )}

      {selectedUser?.candidate?.idiom && (
        <Box>
          <Title>{USER_DIALOG.idioms}</Title>
          {selectedUser?.candidate?.idiom.map((item) => (
            <OptionWrapper>
              <Label mr={20}>{item?.idiom?.name}</Label>
              <LevelChip level={item?.level} />
            </OptionWrapper>
          ))}
        </Box>
      )}
    </>
  );
};

const Company = () => {
  const { selectedUser } = useContext(Context);

  return (
    <>
      {selectedUser?.vacancy?.title && (
        <Box>
          <Title>{USER_DIALOG.vacancy}</Title>
          <FlexWrapper>
            <Label mr={20}>{selectedUser?.vacancy?.title}</Label>
            <LevelChip level={selectedUser?.vacancy?.level} />
          </FlexWrapper>
        </Box>
      )}

      {selectedUser?.vacancy?.description && (
        <Box>
          <Title>{USER_DIALOG.description}</Title>
          <Label>{selectedUser?.vacancy?.description}</Label>
        </Box>
      )}

      {selectedUser?.address && (
        <Box>
          <Title>{USER_DIALOG.address}</Title>
          <Label>{selectedUser?.address?.state}</Label>
          <Label>{selectedUser?.address?.city}</Label>
          <Label>{selectedUser?.address?.neighborhood}</Label>
        </Box>
      )}

      {selectedUser?.vacancy?.salary && (
        <Box>
          <Title>{USER_DIALOG.salary}</Title>
          <Label>{setCurrency(selectedUser?.vacancy?.salary)}</Label>
        </Box>
      )}

      {selectedUser?.vacancy?.vacancyPersonality && (
        <Box>
          <Title>{USER_DIALOG.personality}</Title>
          {selectedUser?.vacancy?.vacancyPersonality.map((item) => (
            <div>
              <Label>{item?.personality?.name}</Label>
            </div>
          ))}
        </Box>
      )}

      {selectedUser?.vacancy?.vacancySkill && (
        <Box>
          <Title>{USER_DIALOG.skills}</Title>
          {selectedUser?.vacancy?.vacancySkill.map((item) => (
            <OptionWrapper>
              <Label mr={20}>{item?.skill?.name}</Label>
              <LevelChip level={item?.level} />
            </OptionWrapper>
          ))}
        </Box>
      )}

      {selectedUser?.vacancy?.vacancyIdiom && (
        <Box>
          <Title>{USER_DIALOG.idioms}</Title>
          {selectedUser?.vacancy?.vacancyIdiom.map((item) => (
            <OptionWrapper>
              <Label mr={20}>{item?.idiom?.name}</Label>
              <LevelChip level={item?.level} />
            </OptionWrapper>
          ))}
        </Box>
      )}
    </>
  );
};
