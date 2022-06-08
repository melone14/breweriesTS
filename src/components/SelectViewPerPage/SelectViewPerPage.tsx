import React from "react";
import { SelectWrapper } from "./SelectViewPerPage.style";

type Props = {
  handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  quantity: number[];
  defaultValue: string;
};

const SelectViewPerPage: React.FC<Props> = ({
  handleChange,
  quantity,
  defaultValue,
}) => {
  return (
    <SelectWrapper onChange={handleChange} defaultValue={defaultValue}>
      {quantity.map((quantinty) => (
        <option value={`${quantinty}`} key={quantinty}>
          {quantinty}
        </option>
      ))}
    </SelectWrapper>
  );
};

export default SelectViewPerPage;
