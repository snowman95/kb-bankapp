/** @jsxImportSource @emotion/react */
import { useTypedSelector } from "@src/lib/hooks/useStore";
import Header from "@src/components/Layout/Header";
import {
  Alphabet,
  ATMAddress,
  ATMAddressBoxTop,
  ATMLocationBox,
  ATMLocationContainer,
  ChatbotBody,
  ChatbotContainer,
  ChatbotContent,
  ChatbotTitle,
  ChatbotTitleBox,
  ChatbotTitleContainer,
  ChatbotTitleTop,
  ChatbotUserName,
  ChatMenu,
  ChatMenuContainer,
  InputBox,
  InputContainer,
  RecommandKeywords,
  RecommandKeywordsContainer,
  ScrollArea,
  Timestamp,
  UserText,
} from "./styles";
import Coli from "@src/assets/character/coli.png";
import { ChatBubble } from "@src/components/ChatBubble";
import { colors, Icon, IconButton } from "@kb-bankapp/ui";
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import Map from "@src/assets/map.png";
import { ReturnButton } from "@src/components/ChatBubble/styles";

const Chatbot = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollBox = useRef!<HTMLDivElement>(null);

  const isMobileView = useTypedSelector(
    (state) => state.settingStore.isMobileView
  );

  const [content, setContent] = useState<string>("");
  const [inputs, setInputs] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setContent(value);
    } else {
      if (content) setContent("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length > 0) {
      const newInput = inputRef.current.value;
      setInputs((prev) => [...prev, newInput]);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      if (e.target.value && e.target.value.length > 0) {
        const newInput = e.target.value;
        setInputs((prev) => [...prev, newInput]);
        e.target.value = "";
      }
    }
  };

  const findNearATM = () => {
    setInputs((prev) => [...prev, "주변 ATM 을 찾아줘"]);
  };
  useEffect(() => {
    console.log("inputs", inputs);
    if (!scrollBox.current) return;
    scrollBox.current.scrollTop = scrollBox.current.scrollHeight;
  }, [scrollBox, inputs]);

  return (
    <ChatbotContainer isMobileView={isMobileView}>
      <Header />
      <ScrollArea ref={scrollBox}>
        <Timestamp>22.10.23 20:05 기준</Timestamp>
        <ChatbotTitleContainer>
          <ChatbotTitleBox>
            <ChatbotTitleTop>
              <ChatbotTitle>
                <ChatbotUserName>홍길동</ChatbotUserName>
                {`님, 안녕하세요\nKB 국민은행 챗봇입니다.`}
              </ChatbotTitle>
            </ChatbotTitleTop>
            <ChatbotContent>{`어떤 업무가 궁금하신가요?`}</ChatbotContent>
          </ChatbotTitleBox>
          <img src={Coli} alt={"coli"} width={108} height={101} />
        </ChatbotTitleContainer>

        <ChatbotBody>
          <ChatBubble type="ai">
            <span>
              {`같은 세대가 가장 많이 이용하는 서비스에요!\n버튼을 눌러 이용해 보시겠어요?`}
            </span>
          </ChatBubble>

          <ChatBubble type="menu">
            <ChatMenuContainer>
              <ChatMenu>지점 상담 예약</ChatMenu>
              <ChatMenu>전문가(부동산/세무) 상담 예약</ChatMenu>
              <ChatMenu>지점 찾기 / 번호표 발행</ChatMenu>
              <ChatMenu>자주묻는 질문(FAQ)</ChatMenu>
            </ChatMenuContainer>
          </ChatBubble>

          {inputs.map((input) => {
            return (
              <>
                <ChatBubble type="user" key={input}>
                  <UserText>{input}</UserText>
                </ChatBubble>
                {input === "주변 ATM 을 찾아줘" ? <FindATM /> : <></>}
              </>
            );
          })}
        </ChatbotBody>
      </ScrollArea>

      {content ? (
        <RecommandKeywordsContainer>
          <RecommandKeywords onClick={findNearATM}>
            근처 <b>ATM</b> 찾기
          </RecommandKeywords>
          <RecommandKeywords>
            <b>상담원</b> 연결
          </RecommandKeywords>
        </RecommandKeywordsContainer>
      ) : (
        <></>
      )}
      <InputContainer>
        <IconButton
          theme="CHAT"
          icon={<Icon.Chat.Add />}
          custom={{
            ICON_COLOR: {
              HOVER: colors.neutral70,
              PRESSED: colors.neutral70,
            },
          }}
          emotionCss={css`
            margin: 12px 16px 12px 12px;
          `}
        />
        <InputBox
          ref={inputRef}
          placeholder="궁금한 내용을 입력해 주세요."
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          theme="CHAT"
          custom={{
            ICON_COLOR: {
              IDLE: colors.neutral80,
              HOVER: colors.neutral70,
              PRESSED: colors.neutral70,
            },
          }}
          icon={<Icon.Chat.Send />}
          emotionCss={css`
            margin: 12px 12px 12px 0px;
          `}
          onClick={handleSubmit}
        />
      </InputContainer>
    </ChatbotContainer>
  );
};
export default Chatbot;

const FindATM = () => {
  const handleRefreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <ChatBubble type="ai">
        <span>
          {`KB 수수료 혜택을 이용할 수 있는 주변 ATM기의\n위치를 알려드릴게요`}
        </span>
      </ChatBubble>
      <ChatBubble
        type="ai"
        emotionCss={css`
          width: 260px;
          height: 225px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img src={Map} alt="map" width={269} height={225} />
      </ChatBubble>
      <ATMLocationContainer>
        <ATMLocationBox>
          <ATMAddressBoxTop>
            <Alphabet>A</Alphabet>
            롯데 ATM CD 세븐일레븐(24시간)
          </ATMAddressBoxTop>
          <ATMAddress>서울 구로구 가마산로27길 7 영림빌딩</ATMAddress>
        </ATMLocationBox>
        <ATMLocationBox>
          <ATMAddressBoxTop>
            <Alphabet>B</Alphabet>
            GS25 신구로점
          </ATMAddressBoxTop>
          <ATMAddress>서울 구로구 가마산로 282 대림오피스밸리</ATMAddress>
        </ATMLocationBox>
      </ATMLocationContainer>
      <ReturnButton onClick={handleRefreshPage}>
        챗봇 메인 화면으로 돌아가기
        <IconButton
          theme="PAY"
          custom={{
            ICON_COLOR: {
              IDLE: "#FFF",
            },
            DIR: "RIGHT",
          }}
          icon={<Icon.Pay.TransferArrow />}
        />
      </ReturnButton>
    </>
  );
};
