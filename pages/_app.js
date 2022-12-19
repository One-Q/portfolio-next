import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial="initial" animate="animate" exit="exit">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
