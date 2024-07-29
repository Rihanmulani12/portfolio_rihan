"use client"

import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

const Footer = () => {
  return (
    <div className="mt-auto py-10">
      <p className="text-center text-sm md:text-base">Designed and Developed by Rihan Mulani</p>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        <motion.a
          href="https://github.com/Rihanmulani12"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/rihan-mulani/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LinkedInIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/rihan_mulani"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon className="w-6" />
        </motion.a>
    
      </div>
    </div>
  );
};

export default Footer;
