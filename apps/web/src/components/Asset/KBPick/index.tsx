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
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const KBPick = () => {
  const navigate = useNavigate();

  const openMydataPage = useCallback(() => {
    navigate("/assetHome");
  }, [navigate]);

  const openChatbotPage = useCallback(() => {
    navigate("/chatbot");
  }, [navigate]);

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
        <MenuBox onClick={openMydataPage}>
          <IconButton theme="KBPICK" icon={<Icon.Kbpick.Mydata />} />
          자산관리
        </MenuBox>
        <MenuBox onClick={openChatbotPage}>
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
