import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 117px 0 33px 0;
  width: 100%;
`;

export const CardCraousel = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const CardBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #edf1f9;
  border-radius: 8px;

  width: 140px;
  height: 227px;
`;

export const CardRegistrationBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardRegistrationText = styled.span`
  position: absolute;
  top: 38px;
  white-space: nowrap;
  font: ${typography.body02r};
  color: ${colors.neutral30};
`;

export const CardTitle = styled(motion.span)`
  position: absolute;
  white-space: nowrap;
  font: ${typography.h01};
  font-weight: 400;
  letter-spacing: -0.7px;
  color: ${colors.neutral10};
`;

export const UsageHistoryLink = styled.span`
  cursor: pointer;
  margin-top: 20px;
  text-decoration: underline;
  font: ${typography.body01r};
  color: ${colors.neutral30};

  @media (max-height: 720px) {
    position: absolute;
    bottom: 10px;
  }
  @media (max-height: 550px) {
    display: none;
  }
`;
