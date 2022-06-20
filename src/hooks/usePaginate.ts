import { useState } from "react";

export const usePaginate = () => {
  const [page, setPage] = useState(1);

  const next = () => {
    setPage(page + 1);
  };

  const back = () => {
    setPage(page - 1);
  };

  return { page, next, back };
};

export type UsePaginate = ReturnType<typeof usePaginate>;
