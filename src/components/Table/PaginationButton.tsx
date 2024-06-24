import clsx from 'clsx';
import { Button } from '../Button';

type PaginationButtonProps = {
  currentPage: number;
  page: number | '<' | '>';
  setPage: (page: number) => void;
};

export function PaginationButton({
  currentPage,
  page,
  setPage,
}: PaginationButtonProps) {
  const handlePage = () => {
    if (page === '<') {
      return setPage(currentPage - 1);
    }

    if (page === '>') {
      return setPage(currentPage + 1);
    }

    return setPage(page);
  };

  return (
    <Button
      className={clsx(
        'join-item btn-sm border-gray-300 hover:border-gray-300',
        page === currentPage ? 'bg-gray-200' : 'bg-white'
      )}
      onClick={handlePage}
    >
      {page}
    </Button>
  );
}
