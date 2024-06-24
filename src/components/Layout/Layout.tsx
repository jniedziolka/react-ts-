import React from 'react';
import { Header } from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      {children}
    </div>
  );
}
