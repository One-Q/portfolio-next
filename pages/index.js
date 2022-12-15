import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-background">
      <Head>
        <title>Quentin Gilmart</title>
        <meta name="description" content="Portfolio Quentin Gilmart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="text-6xl font-bold">
          <h1>Hi! I'm</h1>
          <h1 className="text-secondary">Quentin Gilmart</h1>
        </div>

        <Image src="/Logo.svg" width={100} height={100} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
