import * as React from "react";
import { motion } from "framer-motion";
import { SocialLink } from "./SocialLink";
import styles from "./Links.module.css";

const variants = {
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  }
};

export interface LinksProps {
  links: React.ComponentProps<typeof SocialLink>[];
}

export const Links: React.FC<LinksProps> = ({ links }) => (
  <motion.ul
    className={styles.links}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
  >
    {links.map(SocialLink)}
  </motion.ul>
);
