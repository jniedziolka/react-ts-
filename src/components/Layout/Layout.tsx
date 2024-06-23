import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <div className="flex min-h-full flex-col">{children}</div>;
}
