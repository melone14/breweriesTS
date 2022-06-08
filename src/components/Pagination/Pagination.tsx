import React from "react";
import ReactPaginate from "react-paginate";
import usePagination from "hooks/usePagination";

const Pagination: React.FC = () => {
  const [currentItems, handleSelectChange, pageCount, handlePageClick] =
    usePagination();

  return (
    <ReactPaginate
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
      //   renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
