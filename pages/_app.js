import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={"CTvpNt3B5Ol0G6Dfj6hG6Cguv3MSlfWJU9cQWxtx"}
      serverUrl={"https://vou0c9tiv6jj.usemoralis.com:2053/server"}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
