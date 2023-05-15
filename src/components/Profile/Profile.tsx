import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import icon from "../../../public/icon.svg";
import type { SiteConfig } from "../../types";
import styles from "./Profile.module.css";

const variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
};

export const Profile: React.FC<Pick<SiteConfig, "name" | "title">> = ({
  name,
  title
}) => (
  <motion.article
    className={styles.frame}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
  >
    <figure className={styles.profile}>
      <div className={styles.avatar}>
        <Image priority alt={name} src={icon} />
      </div>
      <figcaption className={styles.about}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.title}>{title}</h2>
      </figcaption>
    </figure>
  </motion.article>
);
