import { MainTheme } from "@/themes";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
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
        <Notifications />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
