import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ILayoutAnimation {
  children: ReactNode;
}

const animations = {
  willMount: { opacity: 0 },
  didMount: { opacity: 1 },
  willUnmount: { opacity: 0 },
};

export const LayoutAnimation = ({ children }: ILayoutAnimation) => {
  return (
    <motion.div
      variants={animations}
      initial="willMount"
      animate="didMount"
      exit="willUnmount"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
