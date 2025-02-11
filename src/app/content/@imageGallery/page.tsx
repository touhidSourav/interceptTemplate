import { Image, SimpleGrid } from '@mantine/core';
import React from 'react';
import wait from '@/lib/wait';
import Link from 'next/link';
import photos from '../images/images';
async function page() {
  await wait(500);

  return (
    <SimpleGrid cols={4} className='p-4'>
      {photos.map((image) => (
        <Link href={`/content/${image.id}`} key={image.id}>
          <Image
            src={image.url}
            h={80}
            className='hover:cursor-pointer'
          ></Image>
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default page;
