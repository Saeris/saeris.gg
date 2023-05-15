import React from "react";
import { AnimatePresence } from "framer-motion";
import { Waves } from "../Waves";
import styles from "./Layout.module.css";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <>
    <Waves />
    <main className={styles.container}>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={(): void => window.scrollTo(0, 0)}
      >
        {children}
      </AnimatePresence>
    </main>
  </>
);
