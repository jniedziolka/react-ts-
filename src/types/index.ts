import React from 'react';

export type ReactChildrenType = {
  children: React.ReactNode;
};

export type BaseEntity = {
  id: number;
};

export type GridQueryOptions = {
  page: number;
  perPage: number;
};

export type PaginationInfo = {
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  total: number;
};

export type PaginatedData<T> = {
  items: T[];
  pagination_info: PaginationInfo;
};
