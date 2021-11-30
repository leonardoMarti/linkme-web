import React, { useState, useEffect, useContext, createContext } from 'react';

import { DisableNotification } from '../../../assets/svgs/DisableNotification';

import { getStorage } from '../../../common/utils/storage';
import { setCurrency } from '../../../common/utils/currency';

import { NOTIFICATION, SOLICITATION_STATUS, USER_TYPE } from '../../../common/translate';
import { ENUM_USER_TYPE } from '../../../common/utils/enumerate';

import { ENUM_SOLICITATION_STATUS } from '../../../common/utils/enumerate';

import {
  Container,
  Title,
  TitleWrapper,
  Label,
  Box,
  BoxHeader,
  Status,
  BoxContent,
  Column,
  ButtonWrapper,
  SButton,
  DisableNotificationButton,
} from '../StyledComponents';

import { NotificationContext } from '../index';

export const Trainee = () => {
  const {
    solicitations,
    userData,
    whoSentIsDifferentSameWhoReceived,
    disableNotification,
    changeSolicitationStatus,
    handleStatusLabel,
    pendingStatus,
  } = useContext(NotificationContext);

  const handleSolicitationTitle = (item) => item?.user?.name;

  return (
    <Container>
      {solicitations?.map((item, index) => (
        <Box key={index}>
          <BoxHeader>
            <TitleWrapper>
              <Title>{handleSolicitationTitle(item)}</Title>
              {item?.notification?.notify && whoSentIsDifferentSameWhoReceived(item) && (
                <DisableNotificationButton onClick={() => disableNotification(item?.notification?.id)}>
                  <DisableNotification />
                  {NOTIFICATION.disableNotification}
                </DisableNotificationButton>
              )}
            </TitleWrapper>

            <Status status={item?.status}>{handleStatusLabel(item?.status)}</Status>
          </BoxHeader>
          <BoxContent>
            {item?.user?.vacancy?.title && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.vacancy}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.user?.vacancy?.title}
                </Label>
              </Column>
            )}

            {item?.user?.vacancy?.description && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.description}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.user?.vacancy?.description}
                </Label>
              </Column>
            )}

            {item?.user?.vacancy?.salary && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.salary}
                </Label>
                <Label fs={14} fw={500}>
                  {setCurrency(item?.user?.vacancy?.salary)}
                </Label>
              </Column>
            )}

            {item?.user?.vacancy?.quantity && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.quantity}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.user?.vacancy?.quantity}
                </Label>
              </Column>
            )}
          </BoxContent>
          {pendingStatus(item?.status) && whoSentIsDifferentSameWhoReceived(item) && (
            <ButtonWrapper>
              <SButton
                onClick={() =>
                  changeSolicitationStatus({
                    id: item?.id,
                    status: ENUM_SOLICITATION_STATUS.reject,
                  })
                }
                mr={10}
                reject
              >
                {NOTIFICATION.reject}
              </SButton>
              <SButton
                onClick={() =>
                  changeSolicitationStatus({
                    id: item?.id,
                    status: ENUM_SOLICITATION_STATUS.accept,
                  })
                }
              >
                {NOTIFICATION.accept}
              </SButton>
            </ButtonWrapper>
          )}
        </Box>
      ))}
    </Container>
  );
};
