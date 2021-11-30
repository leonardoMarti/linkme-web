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

export const Company = () => {
  const {
    solicitations,
    userData,
    whoSentIsDifferentSameWhoReceived,
    disableNotification,
    changeSolicitationStatus,
    handleStatusLabel,
    pendingStatus,
  } = useContext(NotificationContext);

  return (
    <Container>
      {solicitations?.map((item, index) => (
        <Box key={index} hasData={item?.vancacy}>
          <BoxHeader>
            <TitleWrapper>
              <Title>{item?.vacancy?.user?.name}</Title>
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
            {item?.vacancy?.title && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.vacancy}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.vacancy?.title}
                </Label>
              </Column>
            )}

            {item?.vacancy?.description && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.description}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.vacancy?.description}
                </Label>
              </Column>
            )}

            {item?.vacancy?.salary && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.salary}
                </Label>
                <Label fs={14} fw={500}>
                  {setCurrency(item?.vacancy?.salary)}
                </Label>
              </Column>
            )}

            {item?.vacancy?.quantity && (
              <Column>
                <Label fs={16} fw={600}>
                  {NOTIFICATION.quantity}
                </Label>
                <Label fs={14} fw={500}>
                  {item?.vacancy?.quantity}
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
