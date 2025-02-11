import { Box, Flex, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

function Userpage() {
  return (
    <Stack justify='center' align='center' className='min-h-80'>
      <Text> Welcome to user Page</Text>
      <Flex gap={10}>
        <Link
          href='user/signIn'
          className='bg-[#001A6E] text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-[#2d48a0] active:bg-purple-900 active:scale-95'
        >
          SignIn
        </Link>
        <Link
          href='user/signUp'
          className='bg-[#ff0000] text-white rounded-md px-4 py-2 transition duration-300 ease-in-out hover:bg-[#fd5329] active:bg-purple-900 active:scale-95 ml-2'
        >
          SignUp
        </Link>
      </Flex>
    </Stack>
  );
}

export default Userpage;
