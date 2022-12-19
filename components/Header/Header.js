import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const links = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Info', path: '/info' },
  { text: 'Contact', path: '/contact' }
];

const getVariants = (router, link) => ({
  initial: { height: 0 },
  animate: { height: router.pathname === link.path ? 5 : 0 },
  exit: { height: 0 }
});

const Header = () => {
  const router = useRouter();
  return (
    <header className="container flex mx-auto py-8 justify-between">
      <Image src="/Logo.svg" alt="Vercel Logo" width={32} height={32} />
      <div className="font-bold flex">
        {links.map((link) => (
          <div key={link.text} className="relative ml-9">
            <Link href={link.path}>{link.text}</Link>
            <motion.div
              animate="animate"
              initial="initial"
              exit="exit"
              variants={getVariants(router, link)}
              transition={{ delay: 0.3 }}
              className="absolute w-full h-0 bg-secondary"
            />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
