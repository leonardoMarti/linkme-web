import React, { useState, useEffect, useContext, createContext } from 'react';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { getStorage } from '../../common/utils/storage';

import { NOTIFICATION, SOLICITATION_STATUS, USER_TYPE } from '../../common/translate';
import { ENUM_USER_TYPE } from '../../common/utils/enumerate';

import { ENUM_SOLICITATION_STATUS } from '../../common/utils/enumerate';

import { SolicitationService } from '../../common/services/solicitationService';
import { NotificationService } from '../../common/services/notificationService';

import { Trainee } from './Trainee';
import { Company } from './Company';

import { Container } from './StyledComponents';

export const NotificationContext = createContext();

export const Notification = () => {
  const userData = getStorage('user');

  const [solicitations, setSolicitations] = useState([]);

  const isTrainee = () => userData?.type === ENUM_USER_TYPE.trainee;

  const whoSentIsDifferentSameWhoReceived = (item) => item?.sent_by !== userData?.type;

  const findSolicitationsById = async () => {
    if (userData?.candidate || userData?.vacancy) {
      const chooseType = isTrainee() ? ENUM_USER_TYPE.trainee : ENUM_USER_TYPE.company;
      const { data } = await SolicitationService.findByPk({ type: chooseType });
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

  const context = {
    solicitations,
    userData,
    whoSentIsDifferentSameWhoReceived,
    disableNotification,
    changeSolicitationStatus,
    handleStatusLabel,
    pendingStatus,
  };

  return (
    <LayoutStructure>
      <NotificationContext.Provider value={context}>
        <Container>{isTrainee() ? <Company /> : <Trainee />}</Container>
      </NotificationContext.Provider>
    </LayoutStructure>
  );
};
