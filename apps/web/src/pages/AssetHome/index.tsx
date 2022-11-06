import { useTypedSelector } from "@src/lib/hooks/useStore";
import Header from "@src/components/Layout/Header";
import { IconButton, Icon } from "@kb-bankapp/ui";
import {
  AssetHomeBlurBox,
  AssetHomeBlurFilter,
  AssetHomeBody,
  AssetHomeBodyContent,
  AssetHomeBodyLabel,
  AssetHomeBodyLabelBox,
  AssetHomeBodyLabelContainer,
  AssetHomeBodyLabelFor,
  AssetHomeBodyMyTypeBox,
  AssetHomeBodyTitle,
  AssetHomeBodyTitleBox,
  AssetHomeContainer,
  AssetHomeContent,
  AssetHomeMyTypeContainer,
  AssetHomeMyTypeTitle,
  AssetHomeTitle,
  AssetHomeTitleBox,
  AssetHomeTitleContainer,
  AssetHomeTitleTop,
  ScrollArea,
  ServiceContainer,
} from "./styles";
import { Service } from "@src/components/Asset/Service";
import Bear from "@src/assets/character/bear.png";
import { useState } from "react";
import { Survey } from "@src/components/Asset/Survey";
import { AnimatedFullFrame } from "@src/styles/theme/motions";

const AssetHome = () => {
  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <AssetHomeContainer isMobileView={isMobileView}>
      {openModal ? (
        <AnimatedFullFrame>
          <Survey onCloseCallback={closeModal} />
        </AnimatedFullFrame>
      ) : (
        <></>
      )}
      <Header />
      <ScrollArea>
        <AssetHomeTitleContainer>
          <AssetHomeTitleBox>
            <AssetHomeTitleTop>
              <AssetHomeTitle>{`똑똑한 AI가\n콕! 집어서 추천합니다`}</AssetHomeTitle>
              <IconButton
                theme="PAY"
                custom={{
                  DIR: "RIGHT",
                }}
                icon={<Icon.Pay.TransferArrow />}
              />
            </AssetHomeTitleTop>
            <AssetHomeContent>
              {`똑똑한 AI가 연령, 거래성향 등 데이터를\n분석해 고객님의 ‘자산관리 유형'에 딱 맞는\n상품과 서비스를 추천해 드립니다.`}
            </AssetHomeContent>
          </AssetHomeTitleBox>
          <img src={Bear} alt={"bear"} width={87} height={78} />
        </AssetHomeTitleContainer>
        <AssetHomeBody>
          <AssetHomeMyTypeContainer>
            <AssetHomeMyTypeTitle>나의 자산관리 유형은?</AssetHomeMyTypeTitle>
            <AssetHomeBodyMyTypeBox onClick={handleClick}>
              설문조사
            </AssetHomeBodyMyTypeBox>
            <span>자산관리 유형을 추가하거나 바꿔보세요.</span>
          </AssetHomeMyTypeContainer>

          <AssetHomeBlurBox>
            <AssetHomeBlurFilter />
            <AssetHomeBodyLabelContainer>
              <AssetHomeBodyLabelFor>for</AssetHomeBodyLabelFor>
              <AssetHomeBodyLabelBox>
                <AssetHomeBodyLabel>#액티브시니어</AssetHomeBodyLabel>
              </AssetHomeBodyLabelBox>
            </AssetHomeBodyLabelContainer>
            <AssetHomeBodyTitleBox>
              <AssetHomeBodyTitle>
                다가오는 은퇴시기, 커져가는 나의 자산
              </AssetHomeBodyTitle>
              <AssetHomeBodyContent>
                즐거운 인생2막을 위한 자산관리의 필요성
              </AssetHomeBodyContent>
            </AssetHomeBodyTitleBox>
            <ServiceContainer>
              <Service theme="서비스" type="경제상식" />
              <Service theme="서비스" type="주식리포트" />
            </ServiceContainer>
          </AssetHomeBlurBox>
        </AssetHomeBody>
      </ScrollArea>
    </AssetHomeContainer>
  );
};
export default AssetHome;
