import { FunctionComponent, ReactNode } from "react";
import s from "./Layout.module.css";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className={s.root}>{children}</main>
    </>
  );
};

export default Layout;
