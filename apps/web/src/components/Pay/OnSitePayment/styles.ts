import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const OnSitePaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;

  padding: 32px 0 38px 0;
  color: ${colors.neutral90};
  font: ${typography.title02};
`;

export const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 38px 0;
  width: 100%;
  height: 100%;
`;

export const Card = styled(motion.img)`
  z-index: 1;
`;
export const CardTitle = styled(motion.span)``;

export const CountNumber = styled.span`
  height: 15px;
  margin: 18px 0 28px;

  text-align: center;
  font: ${typography.body01r};
  font-weight: 500;
  color: ${colors.neutral90};
`;
export const ViewGuild = styled.span`
  cursor: pointer;
  text-decoration: underline;
  text-align: center;
  font: ${typography.body01r};
  font-weight: 500;
  color: ${colors.neutral80};
`;
export const Info = styled.span`
  text-align: center;
  font: ${typography.body02r};
  color: ${colors.neutral80};
`;

export const Wave = styled(motion.div)`
  position: absolute;
  top: -50px;
  border-radius: 50%;
  background: radial-gradient(
    85.34% 85.34% at 50% 23.68%,
    rgba(255, 255, 255, 0.00211607) 0%,
    rgba(255, 255, 255, 0) 52.6%,
    rgba(255, 255, 255, 0.15) 96.35%
  );

  width: 416px;
  height: 416px;
`;
