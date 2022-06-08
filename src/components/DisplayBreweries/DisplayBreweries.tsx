import React from "react";
import { useEffect, useState } from "react";
import Brewery from "components/Brewery/Brewery";
import {
  Wrapper,
  TableWrapper,
  TableHead,
  TableBody,
  FeaturesWrapper,
} from "./DisplayBreweries.style";
import PageTitle from "components/PageTitle/PageTitle";
import Select from "components/Select/Select";

import { quantity } from "data";
import Pagination from "components/Pagination/Pagination";
import UsePagination from "hooks/usePagination";

const DisplayBreweries: React.FC = () => {
  const [currentItems, handleSelectChange] = UsePagination();

  return (
    <Wrapper>
      <PageTitle>Breweries</PageTitle>
      <FeaturesWrapper>
        <p>Breweries per page:</p>
        <Select
          quantity={quantity}
          handleChange={handleSelectChange}
          defaultValue="10"
        />
      </FeaturesWrapper>
      <TableWrapper>
        <TableHead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Phone</th>
          </tr>
        </TableHead>
        <TableBody>
          {currentItems.length > 1 ? (
            currentItems.map((brewery: any) => (
              <Brewery key={brewery.id} brewery={brewery} />
              // <h1>siema</h1>
            ))
          ) : (
            <tr>
              <td>siema</td>
            </tr>
          )}
        </TableBody>
      </TableWrapper>

      <Pagination />
    </Wrapper>
  );
};

export default DisplayBreweries;
