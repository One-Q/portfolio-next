import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
