import { AppProps } from "next/app";
import { ReactNode, FunctionComponent } from "react";
import "@assets/main.css";

const Noop: FunctionComponent<Element> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: { Layout: FunctionComponent<{ children: ReactNode }> };
}) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
