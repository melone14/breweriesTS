import useBreweries from "./useBreweries";
import { useState, useEffect } from "react";
import { BreweryType } from "types";

const UsePagination = () => {
  const [breweries] = useBreweries();
  const [currentItems, setCurrentItems] = useState<BreweryType[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [viewItemsPerPage, setViewItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const endOffset = itemOffset + viewItemsPerPage;
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / viewItemsPerPage));
  }, [itemOffset, breweries, viewItemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * viewItemsPerPage) % breweries.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewItemsPerPage(parseInt(e.target.value));
  };
  return [currentItems, handleSelectChange, pageCount, handlePageClick];
};

export default UsePagination;
