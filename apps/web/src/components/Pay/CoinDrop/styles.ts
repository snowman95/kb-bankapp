import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const CoindropContainer = styled.div`
  position: relative;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;

  padding: 0 22px 50px 22px;
  width: 100%;
  height: 100%;

  font: ${typography.h01};
  font-weight: 700;
`;
export const CoinStartPos = styled.div`
  width: 1px;
  height: 92px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Coin = styled(motion.img)`
  position: absolute;
  width: 72px;
  height: 72px;
`;
export const PointText = styled.span`
  color: ${colors.primary1};
`;
