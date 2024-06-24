import { PaginationInfo } from '@/types';
import { Button } from '../Button';
import { PaginationLinks } from './PaginationLinks';

const PER_PAGE_OPTIONS = [25, 50, 100];

export type PaginationProps = {
  paginationInfo: PaginationInfo;
  setPage: (page: number) => void;
};

type PaginationControlProps = {
  setPerPage: (perPage: number) => void;
};

export function Pagination({
  paginationInfo,
  setPage,
  setPerPage,
}: PaginationProps & PaginationControlProps) {
  return (
    <div className="flex items-center justify-between rounded-b-lg bg-white p-3">
      <div className="dropdown dropdown-top">
        <div
          tabIndex={0}
          role="button"
          className="text-sm font-bold text-gray-400"
        >
          {paginationInfo.from} - {paginationInfo.to} {t('of')}{' '}
          {paginationInfo.total}
        </div>
        <ul
          tabIndex={0}
          className="roundex-box menu dropdown-content z-[1] bg-base-100 p-2 shadow"
        >
          {PER_PAGE_OPTIONS.map((perPageOption, index) => (
            <li key={index}>
              <Button
                className="btn-ghost"
                onClick={() => setPerPage(perPageOption)}
              >
                {perPageOption}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="join">
        <PaginationLinks paginationInfo={paginationInfo} setPage={setPage} />
      </div>
    </div>
  );
}
