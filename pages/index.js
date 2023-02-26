import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Header, Marquee, PageTransition } from '../components';

/*

Welcome to my portfolio!
I am a front end developer with a passion for creating visually stunning and user-friendly web and mobile applications. With my skills in HTML, CSS, JavaScript, React, and React Native, I can bring your project to life.

About Me
I have always had a love for technology and design, and I found that front end development was the perfect combination of these two interests. I have been building websites and mobile apps for over 5 years and have worked on a variety of projects, from small business websites to interactive games.

In my spare time, you can find me tinkering with new technologies, attending meetups and conferences, and staying up-to-date with the latest industry trends.

My Services
As a front end developer, I offer the following services:

Website and mobile app development: I can build custom web and mobile applications for your business or personal brand, using HTML, CSS, JavaScript, React, and React Native.

Responsive design: I can ensure that your website or app looks great and functions smoothly on all devices, from desktop to mobile.

User experience (UX) design: I can help design a website or app that is intuitive and easy to use for your visitors or users.

My Work
Take a look at my portfolio to see some of my recent projects:

Portfolio

Contact Me
If you have a project in mind, I'd love to hear from you! Please send me an email at email@domain.com to discuss your project and how I can help bring it to life.

*/

export default function Home() {
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
                  className="inline-block"
                  initial={{ opacity: 1, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  Hi! I'm
                </motion.span>
              </h1>
              <h1 className="overflow-hidden relative" style={{ WebkitTextFillColor: 'transparent' }}>
                <motion.span
                  className="inline-block text-secondary bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  initial={{ opacity: 1, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}>
                  Quentin Gilmart
                </motion.span>
              </h1>
            </div>
            <div />
          </div>
        </div>
      </main>

      <Marquee word="home" mode={5} />

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
