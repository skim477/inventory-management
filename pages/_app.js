import { Provider as JotaiProvider } from 'jotai';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <JotaiProvider>

        <Component {...pageProps} />

    </JotaiProvider>
  );
}