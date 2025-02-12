'use client';

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
import Modal from '@/app/component/Modal';

function InterceptSignUpPage() {
  // icons for input fields
  const emailIcon = <Icon icon='ic:outline-email' />;
  const passwordIcon = <Icon icon='ri:lock-line' />;
  const userIcon = <Icon icon='clarity:user-line' />;
  const phoneIcon = <Icon icon='mdi:cellphone' />;

  const isMobile = useMediaQuery('(max-width: 768px)');

  //   form validation
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },

    validate: {
      name: (value) => {
        if (!value) return 'Name is required.';
        if (/\d/.test(value)) return 'Name cannot contain numbers.';
        return null;
      },

      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),

      password: (value) => {
        if (!value.trim()) return 'Password cannot be empty.';
        if (value.length < 6)
          return 'Password must be at least 6 characters long.';
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)) {
          return 'Password must contain at least one special character.';
        }
        return null;
      },

      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,

      phone: (value) => {
        if (!value.trim()) return 'Mobile number is required.';
        if (value.length < 5)
          return 'Mobile number must be at least 5 characters.';
        if (!/^\d+$/.test(value))
          return 'Mobile number must contain only digits.';
        return null;
      },
    },
  });

  return (
    <Modal>
      <Box className='md:min-h-screen flex items-center justify-center w-80 sm:w- md:w-[650px] lg:w-auto '>
        <Flex
          justify='center'
          className='bg-white m-auto min-h-[500px] w-full md:w-4/5 lg:w-full rounded-md shadow-lg'
        >
          <Box className='bg-teal-500 w-full md:w-[40%] rounded-tl-md rounded-bl-md hidden md:flex justify-center items-center text-white py-2 md:py-0'>
            <Stack align='center' gap={isMobile ? 5 : 15}>
              <Text className='text-3xl lg:text-4xl font-semibold'>
                Hello there
              </Text>
              <Text className='text-sm lg:text-md'>
                Enter your personal details
              </Text>
              <Link
                href='/user/signIn'
                className='border border-white text-sm hover:scale-105 w-1/2 py-2 text-center rounded-full
             active:scale-95 transition-transform duration-150'
              >
                Sing In
              </Link>
            </Stack>
          </Box>
          <Box className='w-full md:w-[60%] flex py-2'>
            <Stack
              w={isMobile ? '90%' : '70%'}
              gap={isMobile ? 5 : 15}
              className='m-auto'
            >
              <Title
                ta='center'
                size={isMobile ? 'h2' : 'h1'}
                className='text-teal-500'
              >
                Create Account
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

              <Text ta='center' c='dimmed' size={isMobile ? 'xs' : 'sm'}>
                Or use your email account
              </Text>

              <form
                onSubmit={form.onSubmit((values) => {
                  const { confirmPassword, ...rest } = values;
                  console.log(rest);
                })}
                className='flex flex-col gap-2'
              >
                <TextInput
                  leftSection={userIcon}
                  placeholder='Name'
                  key={form.key('name')}
                  {...form.getInputProps('name')}
                />
                <TextInput
                  leftSection={emailIcon}
                  placeholder='Email'
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />

                <TextInput
                  leftSection={phoneIcon}
                  placeholder='Phone Number'
                  key={form.key('phone')}
                  {...form.getInputProps('phone')}
                />

                <PasswordInput
                  leftSection={passwordIcon}
                  placeholder='Password'
                  key={form.key('password')}
                  {...form.getInputProps('password')}
                />

                <PasswordInput
                  leftSection={passwordIcon}
                  placeholder='Confirm Password'
                  key={form.key('confirmPassword')}
                  {...form.getInputProps('confirmPassword')}
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
                    className='border border-white text-sm hover:scale-105 w-[65%] md:w-[40%] py-2 text-center rounded-full
             active:scale-95 transition-transform duration-150 bg-teal-500 hover:bg-teal-500'
                  >
                    Submit
                  </Button>
                </Group>
              </form>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Modal>
  );
}

export default InterceptSignUpPage;
