import { createTheme, MantineProvider } from '@mantine/core';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme='light'>
      {children}
    </MantineProvider>
  );
};

export default Providers;
