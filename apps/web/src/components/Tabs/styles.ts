import styled from "@emotion/styled";
import { colors } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const TabBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;
export const Tab = styled(motion.ul)`
  border-radius: 50%;
  background-color: ${colors.neutral90};
  width: 4px;
  height: 4px;
`;
export const CurrentTab = styled(motion.li)`
  list-style: none;
  border-radius: 50px;
  background-color: ${colors.neutral60};
  width: 12px;
  height: 4px;
`;
