import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { CustomButton } from './StyledComponents';

export const LinearLoading = (props) => {
  return <LinearProgress color="inherit" {...props} />;
};
