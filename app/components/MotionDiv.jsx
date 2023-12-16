"use client";
import { motion } from "framer-motion";
import useStore from "../store/useStore";

export const MotionDiv = ({ children }) => {
  const { falseShowMenu } = useStore(); // Move the hook inside the functional component

  return <motion.div onClick={falseShowMenu}>{children}</motion.div>;
};
