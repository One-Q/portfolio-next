import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Header, PageTransition, ProjectCard } from '../components';
import { getProjects } from './api/projects';

export default function Projects({ projects }) {
  return (
    <PageTransition>
      <Head>
        <title>Quentin Gilmart</title>
        <meta name="description" content="Portfolio Quentin Gilmart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-screen flex-col">
          <Header />
          <div className="container mx-auto flex items-center flex-1 pb-24  px-4">
            <div />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
        </div>
        <div className="container mx-auto flex-1 pb-24  px-4">
          <motion.div className="grid grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
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

export async function getServerSideProps() {
  const projects = await getProjects();
  return {
    props: { projects }
  };
}
