import styled from "@emotion/styled";
import { colors, typography } from "@kb-bankapp/ui";
import { Mobile } from "@type-default";

export const ChatbotContainer = styled.div<Mobile>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  ${(props) =>
    props.isMobileView &&
    `
        height: 100vh;
        height: calc(var(--vh) * 100);
    `}
`;
export const ScrollArea = styled.div`
  overflow-y: scroll;

  background: #fbf7e9;
  padding: 16px 16px 37px 16px;
  width: 100%;
  height: 100%;
`;

export const Timestamp = styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  color: ${colors.neutral60};
  font: ${typography.body02r};
`;

export const ChatbotTitleContainer = styled.div`
  display: flex;
  gap: 2px;
  padding: 0 0 20px 8px;
`;
export const ChatbotTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const ChatbotTitleTop = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
`;
export const ChatbotTitle = styled.div`
  font: ${typography.h01};
  font-weight: bold;
`;
export const ChatbotUserName = styled.span`
  font: ${typography.h01};
  font-weight: 800;
`;

export const ChatbotContent = styled.div`
  color: ${colors.neutral50};
  font: ${typography.body02r};
`;

export const ChatbotBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding-right: 2px;
`;
export const ChatMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ChatMenu = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  border: 1px solid ${colors.primary1};
  border-radius: 8px;
  padding: 23px 93px;

  color: ${colors.neutral10};
  font: ${typography.body02m};
  font-size: 17px;
  white-space: nowrap;

  :hover {
    background: ${colors.neutral95};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.neutral95};
  background-color: #fff;
  margin-bottom: 28px;
`;

export const InputBox = styled.input`
  border: none;
  border-left: 1px solid ${colors.neutral95};
  outline: none;
  padding: 14.5px 16px;
  width: 100%;
  font: ${typography.body01r};
  color: ${colors.neutral20};

  ::placeholder {
    color: ${colors.neutral80};
  }
`;
export const RecommandKeywordsContainer = styled.div`
  display: flex;
  gap: 12px;
  background-color: ${colors.neutral100};

  width: 100%;
  padding: 8.5px 12px;
`;

export const RecommandKeywords = styled.div`
  cursor: pointer;
  background-color: ${colors.neutral10};
  border-radius: 50px;
  padding: 6px 12px;
  color: ${colors.neutral100};
  font: ${typography.body01r};

  :hover {
    background-color: ${colors.neutral40};
  }
  :active {
    background-color: ${colors.neutral40};
  }
`;

export const UserText = styled.span`
  font-weight: 800;
  line-height: 150%;
`;

export const ATMLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ATMLocationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background: #ffffff;
  border: 1px solid ${colors.primary1};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 12px;
  color: ${colors.neutral0};
  font: ${typography.body01m};
`;

export const ATMAddressBoxTop = styled.div`
  display: flex;
  gap: 8px;
`;

export const ATMAddress = styled.div`
  color: ${colors.neutral40};
  font: ${typography.body03r};
`;
export const Alphabet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.primary1};
  padding: 4px;

  color: ${colors.neutral0};
  font: ${typography.body01m};
  font-weight: 900;
`;
