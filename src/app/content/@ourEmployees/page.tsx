import {
  Badge,
  Box,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from '@mantine/core';
import React from 'react';
import wait from '@/lib/wait';

async function page() {
  await wait(700);
  const employees = [
    {
      name: 'Alice Johnson',
      image:
        'https://static7.depositphotos.com/1298242/789/i/450/depositphotos_7894140-stock-photo-cheerful-hispanic-man-smiling-at.jpg',
      designation: 'Software Engineer',
    },
    {
      name: 'Bob Smith',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      designation: 'Project Manager',
    },
    {
      name: 'Charlie Brown',
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
      designation: 'UI/UX Designer',
    },
  ];
  return (
    <Flex justify='space-around' className='p-4'>
      {employees.map((employee, index) => (
        <Stack
          justify='center'
          key={index}
          gap={5}
          align='center'
          className='border border-gray-400 max-w-48 text-white p-2 rounded-md'
        >
          <Image h={150} w={150} src={employee.image}></Image>
          <Flex align='center'>
            <Text className='text-sm'>Name:</Text>
            <Text className='text-sm px-1'>{employee.name}</Text>
          </Flex>
          <Flex align='center'>
            <Text className='text-sm'>Role:</Text>
            <Text className='text-sm px-1'>{employee.designation}</Text>
          </Flex>
        </Stack>
      ))}
    </Flex>
  );
}

export default page;
