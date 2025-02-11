import { Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Title ta='center'>Hello there</Title>
      <Text>
        {' '}
        <Link href='/content' className='text-blue-600 underline'>
          Click here
        </Link>{' '}
        to go to Content page
      </Text>
      <Text>
        Go to{' '}
        <Link href='/user' className='text-blue-600 underline'>
          {' '}
          User Login
        </Link>{' '}
        page
      </Text>
    </>
  );
}
