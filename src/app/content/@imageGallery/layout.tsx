import React, { ReactNode } from 'react';

interface GalleryLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

function GalleryLayout({ children, modal }: GalleryLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default GalleryLayout;
