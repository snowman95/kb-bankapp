import styled from "@emotion/styled";
import { typography } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const CooperationTotalContainer = styled.div`
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  gap: 38px;

  padding: 0 22px 50px 22px;
  width: 100%;
`;

export const CooperationContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  width: 100%;
`;

export const CooperationColBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10.66px;
`;

export const CooperationRowBox = styled(motion.div)`
  display: flex;
  gap: 16.6px;
`;

export const Logo = styled.img`
  width: 74.62px;
  height: 74.62px;
`;

export const CooperationTitle = styled.span`
  font: ${typography.title01};
`;

export const BlurBox = styled.div`
  z-index: 1;
  position: absolute;
  right: -22px;

  background: linear-gradient(
    270deg,
    rgba(250, 250, 250) 0%,
    rgba(255, 255, 255, 0) 88.89%
  );
  mix-blend-mode: normal;

  width: 81px;
  height: 400px;
`;
