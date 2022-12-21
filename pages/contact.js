import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Header, PageTransition } from '../components';

export default function Contact() {
  return (
    <PageTransition>
      <Head>
        <title>Quentin Gilmart</title>
        <meta name="description" content="Portfolio Quentin Gilmart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen flex-col">
        <Header />
        <div className="container mx-auto flex items-center flex-1 pb-24  px-4">
          <div className="flex justify-between">
            <div className="text-4xl xs sm:text-6xl font-bold">
              <h1 className="overflow-hidden relative">
                <motion.span
                  className="absolute"
                  initial={{ opacity: 1, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  Hi! I'm
                </motion.span>
                <span className="invisible">Hi! I'm</span>
              </h1>
              <h1 className="overflow-hidden relative" style={{ WebkitTextFillColor: 'transparent' }}>
                <motion.span
                  className="absolute text-secondary bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  initial={{ opacity: 1, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}>
                  Quentin Gilmart
                </motion.span>
                <span className="invisible">Quentin Gilmart</span>
              </h1>
            </div>
            <div />
          </div>
        </div>
      </main>

      <footer className="flex flex-1 py-8 border-t-[1px] border-l-slate-400 justify-center items-center border-solid">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-grow justify-center items-center">
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </PageTransition>
  );
}
