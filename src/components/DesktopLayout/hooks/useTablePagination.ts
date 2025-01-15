import { useState } from "react";
import { Card } from "../../../objects/card";

export function useTablePagination(cardList: Card[]) {
  const pageLength = 15;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(pageLength)
  const maxPages = Math.ceil(cardList.length / pageLength)

  const nextPage = () => {
    const newPage = page + 1
    const newLimit = pageLength * newPage;
    const newOffset = newLimit - pageLength;
    setPage(newPage);
    setOffset(newOffset);
    setLimit(newLimit);
  }

  const prevPage = () => {
    const newPage = page - 1;
    const newLimit = limit - pageLength;
    const newOffset = newLimit - pageLength;
    setPage(newPage);
    setOffset(newOffset);
    setLimit(newLimit);
  }

  const disablePrev = page <= 1;
  const disableNext = limit >= cardList.length;

  const paginatedCardList = cardList.slice(offset, limit);

  return {
    page,
    maxPages,
    nextPage,
    prevPage,
    disableNext,
    disablePrev,
    paginatedCardList
  }
}