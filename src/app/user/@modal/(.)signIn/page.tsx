'use client';

import Modal from '@/app/component/Modal';
import React from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { Icon } from '@/app/component/Icons';
import { useMediaQuery } from '@mantine/hooks';

function InterceptedSignInPage() {
  const emailIcon = <Icon icon='ic:outline-email' />;
  const passwordIcon = <Icon icon='ri:lock-line' />;
  const isMobile = useMediaQuery('(max-width: 768px)');
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => {
        // Check if password is empty
        if (!value || value.trim() === '') {
          return 'Password cannot be empty.';
        }

        // Check if password is at least 6 characters long
        if (value.length < 6) {
          return 'Password must be at least 6 characters long.';
        }

        // Check if password contains at least one special character
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (!specialCharacters.test(value)) {
          return 'Password must contain at least one special character.';
        }

        // If all checks pass, return null (no error)
        return null;
      },
    },
  });
  return (
    <Modal>
      <Box className=' min-h-screen flex items-center justify-center'>
        <Flex
          justify='center'
          className='bg-white m-auto min-h-[500px] w-[300px] md:w-full rounded-md'
        >
          <Box className='md:w-[60%] flex'>
            <Stack w={isMobile ? '85%' : '70%'} className='m-auto'>
              <Title
                size={isMobile ? 'h3' : 'h2'}
                ta='center'
                className='text-teal-500'
              >
                Sign In to our Website
              </Title>

              {/* social auth */}
              <Flex justify='center' align='center' gap={10}>
                <ActionIcon
                  variant='outline'
                  color='rgba(0, 0, 0, 1)'
                  size={isMobile ? 'lg' : 'xl'}
                  radius='xl'
                  aria-label='Settings'
                >
                  <Icon icon='fa-brands:facebook-f' className='text-2xl' />
                </ActionIcon>
                <ActionIcon
                  variant='outline'
                  color='rgba(0, 0, 0, 1)'
                  size={isMobile ? 'lg' : 'xl'}
                  radius='xl'
                  aria-label='Settings'
                >
                  <Icon icon='la:google-plus' className='text-2xl' />
                </ActionIcon>
                <ActionIcon
                  variant='outline'
                  color='rgba(0, 0, 0, 1)'
                  size={isMobile ? 'lg' : 'xl'}
                  radius='xl'
                  aria-label='Settings'
                >
                  <Icon icon='formkit:linkedin' className='text-2xl' />
                </ActionIcon>
              </Flex>

              <Text ta='center' c='dimmed' size='sm'>
                Or use your email account
              </Text>

              <form
                onSubmit={form.onSubmit((values) => console.log(values))}
                className='flex flex-col gap-2'
              >
                <TextInput
                  leftSection={emailIcon}
                  placeholder='Email'
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />

                <PasswordInput
                  leftSection={passwordIcon}
                  placeholder='Password'
                  key={form.key('password')}
                  {...form.getInputProps('password')}
                />

                <Box className='flex justify-center'>
                  <Text ta='center' className='relative inline-block'>
                    <Link href='#' className='text-sm md:text-md'>
                      Forgot your password
                    </Link>
                    <span className='absolute left-0 right-0 -bottom-1 h-[1px] bg-gray-300'></span>
                  </Text>
                </Box>

                <Group justify='center' mt='md'>
                  <Button
                    type='submit'
                    className='border border-white text-sm hover:scale-105 w-[60%] md:w-[40%] py-2 text-center rounded-full
             active:scale-95 transition-transform duration-150 bg-teal-500 hover:bg-teal-500'
                  >
                    Submit
                  </Button>
                </Group>
              </form>
            </Stack>
          </Box>
          <Box className='bg-teal-500 w-[40%] rounded-tr-md rounded-br-md hidden md:flex justify-center items-center text-white'>
            <Stack align='center'>
              <Title>Welcome</Title>
              <Text ta='center' className='text-xs md:text-md lg:text-lg px-2'>
                Enter your Email and password to log in
              </Text>
              <Link
                href='/user/signUp'
                className='border border-white text-sm hover:scale-105 w-1/2 py-2 text-center rounded-full
             active:scale-95 transition-transform duration-150'
              >
                Sing Up
              </Link>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Modal>
  );
}

export default InterceptedSignInPage;
