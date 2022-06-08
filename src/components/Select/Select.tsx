import React from "react";
import { SelectWrapper } from "./Select.style";

type Props = {
  handleChange: (e: any) => void;
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
