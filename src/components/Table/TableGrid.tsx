import React from 'react';
import { GridQueryOptions, PaginatedData } from '@/types';
import { BaseEntity } from '@/types';
import { UseQueryResult } from '@tanstack/react-query';
import { Table, TableColumn } from './Table';
import { LoadingRing } from '../Loading';
import { Pagination } from './Pagination';

const DEFAULT_INITIAL_PAGE = 1;
const DEFAULT_PER_PAGE = 25;

type TableGridProps<Entry extends BaseEntity> = {
  paginatedQuery: (
    gridQueryOptions: GridQueryOptions
  ) => UseQueryResult<PaginatedData<Entry>>;
  columns: TableColumn<Entry>[];
};

export function TableGrid<Entry extends BaseEntity>({
  paginatedQuery,
  columns,
}: TableGridProps<Entry>) {
  const [currentPage, setCurrentPage] = React.useState(DEFAULT_INITIAL_PAGE);
  const [perPage, setPerPage] = React.useState(DEFAULT_PER_PAGE);

  const queryResult = paginatedQuery({
    page: currentPage,
    perPage,
  });

  if (queryResult.isLoading) {
    return <LoadingRing />;
  }

  if (!queryResult.data) {
    return 'Error with loading data.';
  }

  return (
    <div className="divide-y">
      <Table data={queryResult.data.items} columns={columns} />
      <Pagination
        paginationInfo={queryResult.data.pagination_info}
        setPage={setCurrentPage}
        setPerPage={setPerPage}
      />
    </div>
  );
}
