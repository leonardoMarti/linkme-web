import React from 'react';
import { USER_LEVEL } from '../../../common/translate';

import { LevelWrapper } from './StyledComponents';

export const LevelChip = ({ level }) => {
  const handleLevelChip = (item) =>
    USER_LEVEL.find((status) => status?.level === item)?.name;

  return (
    <LevelWrapper level={level}>
      {handleLevelChip(level)}
    </LevelWrapper>
  );
};
