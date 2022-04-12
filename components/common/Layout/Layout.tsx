import { FC } from "react";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
