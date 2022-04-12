import { AppProps } from "next/app";
import { FunctionComponent } from "react";

const Noop: FunctionComponent<Element> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent<any> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
