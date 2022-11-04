import { useTypedSelector } from "@src/lib/hooks/useStore";
import Header from "@src/components/Layout/Header";
import { IconButton, Icon } from "@kb-bankapp/ui";
import {
  AIServiceBody,
  AIServiceBodyContent,
  AIServiceBodyLabel,
  AIServiceBodyLabelBox,
  AIServiceBodyLabelContainer,
  AIServiceBodyLabelFor,
  AIServiceBodyMyTypeBox,
  AIServiceBodyTitle,
  AIServiceBodyTitleBox,
  AIServiceContainer,
  AIServiceContent,
  AIServiceMyTypeContainer,
  AIServiceMyTypeTitle,
  AIServiceTitle,
  AIServiceTitleBox,
  AIServiceTitleContainer,
  AIServiceTitleTop,
  AIServiceUserName,
  ScrollArea,
  ServiceContainer,
} from "./styles";
import { Service } from "@src/components/Asset/Service";
import Bear from "@src/assets/character/bear-walk.png";

const AIService = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  return (
    <AIServiceContainer isMobileView={isMobileView}>
      <Header />
      <ScrollArea>
        <AIServiceTitleContainer>
          <AIServiceTitleBox>
            <AIServiceTitleTop>
              <AIServiceTitle>
                <AIServiceUserName>홍길동</AIServiceUserName>
                {`님의 숨겨진\n자산관리 유형을 찾았어요.`}
              </AIServiceTitle>
            </AIServiceTitleTop>
            <AIServiceContent>
              {`똑똑한 AI가 연령, 거래성향 등 데이터를\n분석해 고객님의 ‘자산관리 유형'에 딱 맞는\n상품과 서비스를 추천해 드립니다.`}
            </AIServiceContent>
          </AIServiceTitleBox>
          <img src={Bear} alt={"bear-walk"} width={100} height={124} />
        </AIServiceTitleContainer>
        <AIServiceBody>
          <AIServiceMyTypeContainer>
            <AIServiceMyTypeTitle>나의 자산관리 유형은?</AIServiceMyTypeTitle>
            <AIServiceBodyMyTypeBox>#액티브시니어</AIServiceBodyMyTypeBox>
            <span>자산관리 유형을 추가하거나 바꿔보세요.</span>
          </AIServiceMyTypeContainer>

          <AIServiceBodyLabelContainer>
            <AIServiceBodyLabelFor>for</AIServiceBodyLabelFor>
            <AIServiceBodyLabelBox>
              <AIServiceBodyLabel>#액티브시니어</AIServiceBodyLabel>
            </AIServiceBodyLabelBox>
          </AIServiceBodyLabelContainer>
          <AIServiceBodyTitleBox>
            <AIServiceBodyTitle>
              다가오는 은퇴시기, 커져가는 나의 자산
            </AIServiceBodyTitle>
            <AIServiceBodyContent>
              즐거운 인생2막을 위한 자산관리의 필요성
            </AIServiceBodyContent>
          </AIServiceBodyTitleBox>
          <ServiceContainer>
            <Service theme="서비스" type="경제상식" />
            <Service theme="서비스" type="주식리포트" />
          </ServiceContainer>
        </AIServiceBody>
      </ScrollArea>
    </AIServiceContainer>
  );
};
export default AIService;
