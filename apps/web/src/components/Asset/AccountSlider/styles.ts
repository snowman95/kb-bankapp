import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { motion } from "framer-motion";

export const AccountContainer = styled.div`
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const AccountCraousel = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const AccountBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  border: 1px solid ${colors.neutral90};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  padding: 16px;

  width: calc(100% - 16px);
  width: 328px;
  height: 198px;
`;

export const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const AlertButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 0.666667px solid ${colors.neutral99};
  box-shadow: 0px 2.66667px 5.33333px rgba(0, 0, 0, 0.08);
  width: 24px;
  height: 24px;
`;
export const AccountTitleContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const AccountTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const AccountTitle = styled.span`
  font: ${typography.body02r};
  color: ${colors.neutral40};
`;
export const AccountNumber = styled.span`
  font: ${typography.body01m};
  color: ${colors.neutral10};
`;

export const KBIconBox = styled.img`
  width: 32px;
  height: 32px;
`;

export const AccountBody = styled.div`
  display: flex;
  gap: 4px;
`;
export const Money = styled.span`
  font: ${typography.h01};
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.7px;
  color: ${colors.neutral10};
`;

export const TransferButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.primary2};
  border-radius: 4px;
  padding: 4px 29px;
  width: 86px;
  height: 31px;

  color: ${colors.neutral20};
  font: ${typography.body01r};
`;

export const SlideStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
