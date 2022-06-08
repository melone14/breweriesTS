import React from "react";
import { Wrapper } from "./PageTitle.style";

type Props = {
  children: JSX.Element | string;
};

const PageTitle: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageTitle;
