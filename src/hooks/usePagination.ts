import useBreweries from "./useBreweries";
import { useState, useEffect } from "react";

const UsePagination = () => {
  const [breweries] = useBreweries();
  const [currentItems, setCurrentItems] = useState<[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [viewItemsPerPage, setViewItemsPerPage] = useState(10);

  useEffect(() => {
    const endOffset = itemOffset + viewItemsPerPage;
    setCurrentItems(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / viewItemsPerPage));
  }, [itemOffset, breweries, viewItemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * viewItemsPerPage) % breweries.length;
    setItemOffset(newOffset);
  };

  const handleSelectChange = (e: any) => {
    setViewItemsPerPage(parseInt(e.target.value));
  };
  return [currentItems, handleSelectChange, pageCount, handlePageClick];
};

export default UsePagination;
