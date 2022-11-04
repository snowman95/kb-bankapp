import styled from "@emotion/styled";
import { motion } from "framer-motion";

export type TRepeatType = "loop" | "reverse" | "mirror" | "undefined";
export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};
export const AnimatedFrame = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
AnimatedFrame.defaultProps = {
  variants: variants.fadeIn,
  initial: "initial",
  animate: "animate",
};

export const AnimatedFullFrame = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  background: rgba(28, 27, 31, 0.6);
`;
AnimatedFullFrame.defaultProps = {
  variants: variants.fadeIn,
  initial: "initial",
  animate: "animate",
};
