import { FunctionComponent, ReactNode } from "react";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
