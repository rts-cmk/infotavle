import { motion } from "framer-motion";


export default function Logo() {
  return (
    <motion.img
      className="logo"
      src='/logo.svg'  alt="logo"// use imported variable
      initial={{ y: -600, scale: 0.7, rotate: 0, opacity: 0 }}
      animate={{ y: -200, scale: 1, /* rotate: 360, */ opacity: 1}}
      transition={{ duration: 1.5, delay: 1, repeat:Infinity, repeatDelay: 50 }}
    />
  );
}
