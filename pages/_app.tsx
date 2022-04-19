import "@assets/main.css";
import { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { UIProvider } from "@components/ui/context";
import "keen-slider/keen-slider.min.css";

type Props = {
  children: ReactNode | ReactNode[];
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<Props> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
