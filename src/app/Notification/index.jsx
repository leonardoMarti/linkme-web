import React, { useState, useEffect } from 'react';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { DisableNotification } from '../../assets/svgs/DisableNotification';

import { getStorage } from '../../common/utils/storage';
import { setCurrency } from '../../common/utils/currency';

import { NOTIFICATION, SOLICITATION_STATUS, USER_TYPE } from '../../common/translate';

import { ENUM_SOLICITATION_STATUS } from '../../common/utils/enumerate';

import { SolicitationService } from '../../common/services/solicitationService';
import { NotificationService } from '../../common/services/notificationService';

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
} from './StyledComponents';

export const Notification = () => {
  const userData = getStorage('user');

  const [solicitations, setSolicitations] = useState([]);

  const findSolicitationsById = async () => {
    if (userData?.candidate) {
      const { data } = await SolicitationService.findByPk(userData?.id);
      if (data?.length) setSolicitations(data);
    }
  };

  const disableNotification = async (id) => {
    await NotificationService.update({
      id,
      notify: false,
    });
    await findSolicitationsById();
  };

  const changeSolicitationStatus = async ({ id, status }) => {
    await SolicitationService.update({ id, status });
    await findSolicitationsById();
  };

  useEffect(() => {
    findSolicitationsById();
  }, []);

  const handleStatusLabel = (status) => SOLICITATION_STATUS.find((item) => item?.value === status).label;

  const pendingStatus = (status) => status === 'pending';

  return (
    <LayoutStructure>
      <Container>
        {solicitations?.map((item, index) => (
          <Box key={index}>
            <BoxHeader>
              <TitleWrapper>
                <Title>{item?.user?.name}</Title>
                {item?.notification?.notify && (
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
            {pendingStatus(item?.status) && (
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
    </LayoutStructure>
  );
};
