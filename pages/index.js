import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-background">
      <Head>
        <title>Quentin Gilmart</title>
        <meta name="description" content="Portfolio Quentin Gilmart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen flex-col">
        <header className="container mx-auto py-8">
          <Image src="/Logo.svg" alt="Vercel Logo" width={32} height={32} />
        </header>
        <div className="container mx-auto flex items-center flex-1 pb-24">
          <div className="flex justify-between">
            <div className="text-6xl font-bold">
              <h1 className="overflow-hidden relative">
                <motion.span
                  className="absolute"
                  initial={{ opacity: 1, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  Hi! I'm
                </motion.span>
                <span className="invisible">Hi! I'm</span>
              </h1>
              <h1 className="overflow-hidden relative" style={{ WebkitTextFillColor: 'transparent' }}>
                <motion.span
                  className="absolute text-secondary bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  initial={{ opacity: 1, y: 100 }}
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
