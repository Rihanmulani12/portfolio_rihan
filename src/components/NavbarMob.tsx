"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

interface INavItem {
  name: string;
  link: string;
}

const NavbarMob = ({ navItems }: { navItems: INavItem[] }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <div className="sticky top-0 inset-x-0 p-6 z-50">
      <div className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: { rotate: 0 },
              show: { rotate: 45, y: 5 },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: { opacity: 1 },
              show: { opacity: 0 },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: { rotate: 0 },
              show: { rotate: -45, y: -5 },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    staggerChildren: 0.25,
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-black/80 p-6 flex flex-col justify-center space-y-10 lg:hidden"
            >
              <motion.div
                variants={{
                  hide: { y: "25%", opacity: 0 },
                  show: { y: "0%", opacity: 1 },
                }}
                className="list-none space-y-6 flex flex-col ml-10"
              >
                {navItems.map((item) => (
                  <Link key={item.link} href={item.link} onClick={toggleMobileNav}>
                    {item.name}
                  </Link>
                ))}
              </motion.div>
              <motion.div
                variants={{
                  hide: { y: "25%", opacity: 0 },
                  show: { y: "0%", opacity: 1 },
                }}
                className="w-full h-px bg-white/30"
              ></motion.div>
              <motion.div
                variants={{
                  hide: { y: "25%", opacity: 0 },
                  show: { y: "0%", opacity: 1 },
                }}
                className="list-none flex justify-center gap-x-4"
              >
                <motion.a
                  href="https://github.com/Rihanmulani12"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 1 }}
                >
                  <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rihan-mulani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 1 }}
                >
                  <LinkedInIcon className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://x.com/rihan_mulani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 1 }}
                >
                  <TwitterIcon className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavbarMob;
