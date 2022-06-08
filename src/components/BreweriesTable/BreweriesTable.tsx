import { BreweryType } from "types";
import React from "react";
import Brewery from "components/Brewery/Brewery";

import { TableWrapper, TableHead, TableBody } from "./Breweries.style";

type Props = {
  breweries: BreweryType[];
};

const BreweriesTable: React.FC<Props> = ({ breweries }) => {
  return (
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
        {breweries.map((brewery) => (
          <Brewery brewery={brewery} key={brewery.id} />
        ))}
      </TableBody>
    </TableWrapper>
  );
};

export default BreweriesTable;
