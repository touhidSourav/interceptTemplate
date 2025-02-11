import React from 'react';
import images from '../../images/images';
import { Box, Image, Stack, Text } from '@mantine/core';
import Link from 'next/link';

type Params = {
  params: {
    id?: string; // Optional ID parameter
  };
};

function SingleImagepage({ params }: Params) {
  const { id } = params;
  const photo = images.find((img) => img.id === Number(id));
  return (
    <Box className='p-4'>
      <Stack align='center' gap={5}>
        <Image src={photo?.url} h={250} w={250} radius='sm'></Image>
        <Text>Thank you for selecting this image</Text>
        <Link href='/content' className='text-blue-950 underline'>
          Go back
        </Link>
      </Stack>
    </Box>
  );
}

export default SingleImagepage;
