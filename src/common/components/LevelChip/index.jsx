import React from 'react';
import { USER_LEVEL } from '../../../common/translate';

import { LevelWrapper } from './StyledComponents';

export const LevelChip = ({ level }) => {
  const handleLevelChip = (item) =>
    item ? USER_LEVEL.find((status) => status?.level === item)?.name : 'Não informado';

  return <LevelWrapper level={level}>{handleLevelChip(level)}</LevelWrapper>;
};
