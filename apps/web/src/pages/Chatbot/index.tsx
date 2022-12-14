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
    setInputs((prev) => [...prev, "?????? ATM ??? ?????????"]);
  };
  useEffect(() => {
    if (!scrollBox.current) return;
    scrollBox.current.scrollTop = scrollBox.current.scrollHeight;
  }, [scrollBox, inputs]);

  return (
    <ChatbotContainer isMobileView={isMobileView}>
      <Header />
      <ScrollArea ref={scrollBox}>
        <Timestamp>22.10.23 20:05 ??????</Timestamp>
        <ChatbotTitleContainer>
          <ChatbotTitleBox>
            <ChatbotTitleTop>
              <ChatbotTitle>
                <ChatbotUserName>?????????</ChatbotUserName>
                {`???, ???????????????\nKB ???????????? ???????????????.`}
              </ChatbotTitle>
            </ChatbotTitleTop>
            <ChatbotContent>{`?????? ????????? ???????????????????`}</ChatbotContent>
          </ChatbotTitleBox>
          <img src={Coli} alt={"coli"} width={108} height={101} />
        </ChatbotTitleContainer>

        <ChatbotBody>
          <ChatBubble type="ai">
            <span>
              {`?????? ????????? ?????? ?????? ???????????? ???????????????!\n????????? ?????? ????????? ????????????????`}
            </span>
          </ChatBubble>

          <ChatBubble type="menu">
            <ChatMenuContainer>
              <ChatMenu>?????? ?????? ??????</ChatMenu>
              <ChatMenu>?????????(?????????/??????) ?????? ??????</ChatMenu>
              <ChatMenu>?????? ?????? / ????????? ??????</ChatMenu>
              <ChatMenu>???????????? ??????(FAQ)</ChatMenu>
            </ChatMenuContainer>
          </ChatBubble>

          {inputs.map((input) => {
            return (
              <>
                <ChatBubble type="user" key={input}>
                  <UserText>{input}</UserText>
                </ChatBubble>
                {input === "?????? ATM ??? ?????????" ? <FindATM /> : <></>}
              </>
            );
          })}
        </ChatbotBody>
      </ScrollArea>

      {content ? (
        <RecommandKeywordsContainer>
          <RecommandKeywords onClick={findNearATM}>
            ?????? <b>ATM</b> ??????
          </RecommandKeywords>
          <RecommandKeywords>
            <b>?????????</b> ??????
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
          placeholder="????????? ????????? ????????? ?????????."
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
          {`KB ????????? ????????? ????????? ??? ?????? ?????? ATM??????\n????????? ??????????????????`}
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
            ?????? ATM CD ???????????????(24??????)
          </ATMAddressBoxTop>
          <ATMAddress>?????? ????????? ????????????27??? 7 ????????????</ATMAddress>
        </ATMLocationBox>
        <ATMLocationBox>
          <ATMAddressBoxTop>
            <Alphabet>B</Alphabet>
            GS25 ????????????
          </ATMAddressBoxTop>
          <ATMAddress>?????? ????????? ???????????? 282 ?????????????????????</ATMAddress>
        </ATMLocationBox>
      </ATMLocationContainer>
      <ReturnButton onClick={handleRefreshPage}>
        ?????? ?????? ???????????? ????????????
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
