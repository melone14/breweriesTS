import React, { useEffect, useState, useRef } from "react";
import { Wrapper } from "./DisplayBreweries.style";
// import { FeaturesWrapper } from "./DisplayBreweries.style";
import PageTitle from "components/PageTitle/PageTitle";
// import SelectViewPerPage from "components/SelectViewPerPage/SelectViewPerPage";
// import { quantity } from "data";
import ReactPaginate from "react-paginate";
import useBreweries from "hooks/useBreweries";
import { BreweryType } from "types";
import BreweriesTable from "components/BreweriesTable/BreweriesTable";

const DisplayBreweries: React.FC = () => {
  const paginationList = useRef(null);
  const [breweries, isPending, error] = useBreweries();
  const [currentBreweries, setcurrentBreweries] = useState<BreweryType[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [viewItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const endOffset = itemOffset + viewItemsPerPage;
    setcurrentBreweries(breweries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(breweries.length / viewItemsPerPage));
  }, [itemOffset, viewItemsPerPage, breweries]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * viewItemsPerPage) % breweries.length;
    setItemOffset(newOffset);
  };

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setViewItemsPerPage(parseInt(e.target.value));
  //   setPageCount(0);
  //   setItemOffset(0);
  //   setcurrentBreweries(breweries.slice(0, viewItemsPerPage));
  // };

  return (
    <Wrapper>
      <PageTitle>Breweries</PageTitle>
      {/* <FeaturesWrapper>
        <p>Breweries per page:</p>
        <SelectViewPerPage
          quantity={quantity}
          handleChange={handleSelectChange}
          defaultValue="10"
        />
      </FeaturesWrapper> */}
      {isPending ? (
        <h1>loading...</h1>
      ) : breweries.length > 1 ? (
        <BreweriesTable breweries={currentBreweries} />
      ) : error.isError ? (
        <h1>
          Error message:{error.message} <br /> Status: {error.status}
        </h1>
      ) : (
        <h1>empty page</h1>
      )}
      <ReactPaginate
        ref={paginationList}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={undefined}
      />
    </Wrapper>
  );
};

export default DisplayBreweries;
