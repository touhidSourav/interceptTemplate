import { Box, Flex, Stack } from '@mantine/core';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  descriptionBox?: ReactNode;
  imageGallery?: ReactNode;
  ourEmployees?: ReactNode;
}

function Layout({
  children,
  descriptionBox,
  imageGallery,
  ourEmployees,
}: LayoutProps) {
  return (
    <div>
      <div>
        {children}
        <Stack>
          <Flex justify='space-between' gap={10}>
            <Box className='bg-[#021526] w-1/2 text-white '>
              {descriptionBox}
            </Box>
            <Box className='bg-teal-600 w-1/2 text-white '> {imageGallery}</Box>
          </Flex>
          <Box className='bg-black '>{ourEmployees}</Box>
        </Stack>
      </div>
    </div>
  );
}

export default Layout;
