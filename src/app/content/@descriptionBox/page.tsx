import { Text } from '@mantine/core';
import React from 'react';
import wait from '@/lib/wait';
import Link from 'next/link';

async function page() {
  await wait(500);
  return (
    <div>
      <Text ta='justify' className='p-4'>
        Life is a journey filled with endless opportunities and challenges.
        Embrace every moment, learn from your mistakes, and cherish your
        successes. Stay curious, seek growth, and spread kindness. True
        happiness lies in meaningful connections, gratitude, and a positive
        mindset. Believe in yourself, and you'll discover limitless
        possibilities along the way.
        <Link href='/content/seeMore' className='px-10 text-blue-400 underline'>
          See More
        </Link>
      </Text>
    </div>
  );
}

export default page;
