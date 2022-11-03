import {
  MenuBox,
  MenuContainer,
  KBPickContainer,
  KBPickSelectedTab,
  KBPickTab,
  KBPickTabs,
  UnderBar,
  CarButton,
  CarInnerCircle,
  CarDummy,
} from "./styles";
import { Icon, IconButton } from "@kb-bankapp/ui";

export const KBPick = () => {
  return (
    <KBPickContainer>
      <KBPickTabs>
        <KBPickSelectedTab>
          KB Pick
          <UnderBar />
        </KBPickSelectedTab>
        <KBPickTab>지출</KBPickTab>
      </KBPickTabs>

      <MenuContainer>
        <MenuBox>
          <IconButton theme="KBPICK" icon={<Icon.Kbpick.Account />} />
          전체계좌
        </MenuBox>
        <MenuBox>
          <IconButton theme="KBPICK" icon={<Icon.Kbpick.FinancialProducts />} />
          금융상품
        </MenuBox>
        <MenuBox>
          <IconButton theme="KBPICK" icon={<Icon.Kbpick.Mydata />} />
          자산관리
        </MenuBox>
        <MenuBox>
          <IconButton theme="KBPICK" icon={<Icon.Kbpick.Chat />} />
          챗봇/상담
        </MenuBox>
        <MenuBox>
          <CarButton>
            <CarInnerCircle>
              <IconButton theme="KBPICK" icon={<Icon.Kbpick.Car />} />
            </CarInnerCircle>
          </CarButton>
          <CarDummy />
          자동차
        </MenuBox>
      </MenuContainer>
    </KBPickContainer>
  );
};
