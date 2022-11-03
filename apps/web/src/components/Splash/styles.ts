import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SplashAnimationContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

export const Icon = styled(motion.img)`
  position: absolute;
  border-radius: 11.84px;
  width: 65px;
  height: 65px;
`;
