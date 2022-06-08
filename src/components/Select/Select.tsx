import React from "react";
import { SelectWrapper } from "./Select.style";

type Props = {
  handleChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  quantity: number[];
  defaultValue: string;
};

const Select: React.FC<Props> = ({ handleChange, quantity, defaultValue }) => {
  return (
    <SelectWrapper onChange={handleChange} defaultValue={defaultValue}>
      {quantity.map((quantinty) => (
        <option value={`${quantinty}`}>{quantinty}</option>
      ))}
    </SelectWrapper>
  );
};

export default Select;
