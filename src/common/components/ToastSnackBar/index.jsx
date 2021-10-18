import React from 'react';
import { ToastContainer } from 'react-toastify';

export const ToastSnackBar = () => {
  return (
    <ToastContainer
      position="bottom-right"
      theme="colored"
      autoClose={3000}
      hideProgressBar={false}
      closeButton={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
