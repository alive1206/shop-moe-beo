"use client";

import { Main } from "@/layouts";

type Props = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};
