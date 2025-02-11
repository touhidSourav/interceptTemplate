import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import './globals.css';
import {
  ColorSchemeScript,
  Container,
  Flex,
  mantineHtmlProps,
} from '@mantine/core';
import { Providers } from '@/providers';
import Link from 'next/link';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E-commerce Admin',
  description: 'E-commerce website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${poppins.variable} antialiased bg-[#FAF7F0]`}>
        <Providers>
          <Flex justify='center' gap={40} className='py-4 text-sm'>
            <Link
              href='/'
              className='hover:scale-110 hover:underline transition-all duration-200'
            >
              Home
            </Link>
            <Link
              href='#'
              className='hover:scale-110 hover:underline transition-all duration-200'
            >
              About Us
            </Link>
            <Link
              href='#'
              className='hover:scale-110 hover:underline transition-all duration-200'
            >
              Contact Us
            </Link>
            <Link
              href='#'
              className='hover:scale-110 hover:underline transition-all duration-200'
            >
              SignIn
            </Link>
            <Link
              href='#'
              className='hover:scale-110 hover:underline transition-all duration-200'
            >
              SignUp
            </Link>
          </Flex>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
