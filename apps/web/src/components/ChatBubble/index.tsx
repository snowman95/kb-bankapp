/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { colors, Icon } from "@kb-bankapp/ui";
import {
  AIChatBubble,
  AIChatBubbleRightTail,
  AIChatBubbleTail,
  AlignBox,
} from "./styles";

interface ChatBubbleProps {
  type: "menu" | "ai" | "user";
  children: React.ReactElement;
  emotionCss?: SerializedStyles;
}
const THEME = {
  menu: {
    bgColor: colors.primary2,
    color: colors.neutral0,
  },
  ai: {
    bgColor: colors.primary3,
    color: colors.neutral100,
  },
  user: {
    bgColor: colors.neutral100,
    color: colors.neutral0,
  },
};

export const ChatBubble = ({ type, children, emotionCss }: ChatBubbleProps) => {
  return (
    <AlignBox
      css={css`
        ${type === "user" && ` justify-content: flex-end;`};
      `}
    >
      <AIChatBubble
        css={[
          css`
            background: ${THEME[type].bgColor};
            color: ${THEME[type].color};
            ${type === "user" && `width: fit-content;`};
          `,
          emotionCss,
        ]}
      >
        {children}
        {type === "user" ? (
          <AIChatBubbleRightTail>
            <Icon.Chat.Tail color={THEME[type].bgColor} />
          </AIChatBubbleRightTail>
        ) : (
          <AIChatBubbleTail>
            <Icon.Chat.Tail color={THEME[type].bgColor} />
          </AIChatBubbleTail>
        )}
      </AIChatBubble>
    </AlignBox>
  );
};
