import { Box, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <Box className='p-4'>
      <Text>
        This is the see more page. And produce say the ten moments parties.
        Simple innate summer fat appear basket his desire joy. Outward clothes
        promise at gravity do excited. Sufficient particular impossible by
        reasonable oh expression is. Yet preference connection unpleasant yet
        melancholy but end appearance. And excellence partiality estimating
        terminated day everything. Its had resolving otherwise she contented
        therefore. Afford relied warmth out sir hearts sister use garden. Men
        day warmth formed admire former simple. Humanity declared vicinity
        continue supplied no an. He hastened am no property exercise of.
        Dissimilar comparison no terminated devonshire no literature on. Say
        most yet head room such just easy.
      </Text>
      <Link href='/content' className='text-blue-600 underline'>
        Go back
      </Link>
    </Box>
  );
}

export default page;
