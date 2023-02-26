import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const PageTransition = ({ children }) => (
  <motion.div className="bg-background" variants={variants} animate="animate" initial="initial" exit="exit">
    {children}
  </motion.div>
);

export default PageTransition;
