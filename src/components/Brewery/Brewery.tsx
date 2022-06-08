import React from "react";
import { Wrapper } from "./Brewery.style";

type Props = {
  brewery: {
    id: string;
    index: string;
    name: string;
    brewery_type: string;
    phone: string;
  };
};

const Brewery: React.FC<Props> = ({
  brewery: { index, name, brewery_type, phone },
}) => {
  return (
    <Wrapper>
      <td>{index}</td>
      <td>{name}</td>
      <td>{brewery_type}</td>
      <td>{phone ? phone : "unknown"}</td>
    </Wrapper>
  );
};

export default Brewery;
