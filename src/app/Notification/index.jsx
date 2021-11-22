import React, { useState, useEffect } from 'react';

import { LayoutStructure } from '../../common/components/LayoutStructure';

import { getStorage } from '../../common/utils/storage';

import {
  NOTIFICATION,
  SOLICITATION_STATUS,
  USER_TYPE,
} from '../../common/translate';

import { SolicitationService } from '../../common/services/solicitationService';

import {
  Container,
  Title,
  Label,
  Box,
  BoxHeader,
  BoxContent,
} from './StyledComponents';

export const Notification = () => {
  const userData = getStorage('user');

  const [solicitations, setSolicitations] = useState([]);

  console.log('solicitations', solicitations);

  const findSolicitationsById = async () => {
    if (userData?.candidate) {
      const { data } = await SolicitationService.findByPk(
        userData?.id,
      );
      if (data?.length) setSolicitations(data);
    }
  };

  useEffect(() => {
    findSolicitationsById();
  }, []);

  return (
    <LayoutStructure>
      <Container>
        {solicitations?.map((item, index) => (
          <Box key={index}>
            <BoxHeader>
              <div>{item?.user?.name}</div>
              <div>
                Não receber notificação {item?.notification?.notify}
              </div>
              <div>Status {item?.status}</div>
              <div>Botões</div>
            </BoxHeader>
            <BoxContent>
              <div>
                <div>Vaga</div>
                <div>{item?.user?.vacancy?.title}</div>
              </div>
              <div>
                <div>Descrição</div>
                <div>{item?.user?.vacancy?.description}</div>
              </div>
              <div>
                <div>Salário</div>
                <div>{item?.user?.vacancy?.salary}</div>
              </div>
              <div>
                <div>Quantidade</div>
                <div>{item?.user?.vacancy?.quantity}</div>
              </div>
            </BoxContent>
          </Box>
        ))}
      </Container>
    </LayoutStructure>
  );
};
