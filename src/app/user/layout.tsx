import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  modal?: ReactNode;
  imageGallery?: ReactNode;
  ourEmployees?: ReactNode;
}

function Layout({ children, modal }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default Layout;
