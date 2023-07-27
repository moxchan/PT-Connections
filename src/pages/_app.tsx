import { MainTheme } from "@/themes";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Public Transport Connections</title>
      </Head>
      <MantineProvider withGlobalStyles theme={MainTheme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
