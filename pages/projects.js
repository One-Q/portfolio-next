import Head from 'next/head';
import Image from 'next/image';

import { Header, PageTransition } from '../components';
import { getProjects } from './api/projects';

export default function Projects() {
  return (
    <PageTransition>
      <Head>
        <title>Quentin Gilmart</title>
        <meta name="description" content="Portfolio Quentin Gilmart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen flex-col">
        <Header />
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

export async function getServerSideProps() {
  const projects = await getProjects();
  return {
    props: { projects }
  };
}
