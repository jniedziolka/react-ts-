import { rangeInclusive } from '@/utils/rangeInclusive';
import { PaginationProps } from './Pagination';
import { PaginationButton } from './PaginationButton';

export function PaginationLinks({ paginationInfo, setPage }: PaginationProps) {
  const currentPage = paginationInfo.current_page;
  const lastPage = paginationInfo.last_page;

  if (currentPage == 1) {
    return (
      <>
        <PaginationButton
          currentPage={currentPage}
          page={1}
          setPage={setPage}
        />
        {rangeInclusive(2, Math.min(6, paginationInfo.last_page)).map(
          (index) => (
            <PaginationButton
              key={index}
              currentPage={currentPage}
              page={index}
              setPage={setPage}
            />
          )
        )}
        {currentPage !== lastPage && (
          <PaginationButton
            currentPage={currentPage}
            page={'>'}
            setPage={setPage}
          />
        )}
      </>
    );
  }

  if (currentPage == 2) {
    return (
      <>
        <PaginationButton
          currentPage={currentPage}
          page={'<'}
          setPage={setPage}
        />
        <PaginationButton
          currentPage={currentPage}
          page={1}
          setPage={setPage}
        />
        <PaginationButton
          currentPage={currentPage}
          page={2}
          setPage={setPage}
        />
        {rangeInclusive(3, Math.min(5, paginationInfo.last_page)).map(
          (index) => (
            <PaginationButton
              key={index}
              currentPage={currentPage}
              page={index}
              setPage={setPage}
            />
          )
        )}
        {currentPage !== lastPage && (
          <PaginationButton
            currentPage={currentPage}
            page={'>'}
            setPage={setPage}
          />
        )}
      </>
    );
  }

  if (currentPage == lastPage) {
    return (
      <>
        <PaginationButton
          currentPage={currentPage}
          page={'<'}
          setPage={setPage}
        />
        {rangeInclusive(Math.max(1, lastPage - 4), lastPage - 1).map(
          (index) => (
            <PaginationButton
              key={index}
              currentPage={currentPage}
              page={index}
              setPage={setPage}
            />
          )
        )}
        <PaginationButton
          currentPage={currentPage}
          page={lastPage}
          setPage={setPage}
        />
      </>
    );
  }

  if (currentPage == lastPage - 1) {
    return (
      <>
        <PaginationButton
          currentPage={currentPage}
          page={'<'}
          setPage={setPage}
        />
        {rangeInclusive(Math.max(1, lastPage - 4), lastPage - 2).map(
          (index) => (
            <PaginationButton
              key={index}
              currentPage={currentPage}
              page={index}
              setPage={setPage}
            />
          )
        )}
        <PaginationButton
          currentPage={currentPage}
          page={lastPage - 1}
          setPage={setPage}
        />
        <PaginationButton
          currentPage={currentPage}
          page={lastPage}
          setPage={setPage}
        />
        <PaginationButton
          currentPage={currentPage}
          page={'>'}
          setPage={setPage}
        />
      </>
    );
  }

  return (
    <>
      <PaginationButton
        currentPage={currentPage}
        page={'<'}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={currentPage - 2}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={currentPage - 1}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={currentPage}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={currentPage + 1}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={currentPage + 2}
        setPage={setPage}
      />
      <PaginationButton
        currentPage={currentPage}
        page={'>'}
        setPage={setPage}
      />
    </>
  );
}
