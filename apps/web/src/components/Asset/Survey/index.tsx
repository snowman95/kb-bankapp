import { Icon, IconButton } from "@kb-bankapp/ui";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonGroup,
  NoButton,
  SurveyBox,
  SurveyContainer,
  SurveyContainerHeader,
  SurveyContent,
  YesButton,
} from "./styles";

const QUESTION = [
  "자신을 위해 아낌없이 투자하고 계신가요?",
  "자산관리 전문가의 조언을 받고 싶으신가요?",
  "본인의 성향에 맞는 포트폴리오를 제공받고 싶으신가요?",
];

interface SurveyProps {
  onCloseCallback?(): void;
}

type AnswerType = "yes" | "no" | "null";
export const Survey = ({ onCloseCallback }: SurveyProps) => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<AnswerType[]>(["null", "null", "null"]);

  const submitAnswer = (index: number, answer: "yes" | "no") => {
    setAnswer((prev) => {
      const newAnswer = [...prev];
      newAnswer[index] = answer;
      return newAnswer;
    });
  };

  useEffect(() => {
    if (!answer.includes("null")) {
      navigate("/aiService");
    }
  }, [navigate, answer]);

  return (
    <SurveyContainer>
      <SurveyContainerHeader>
        <span>자산관리 유형 설문지</span>
        <IconButton
          theme="HEADER"
          size={24}
          icon={<Icon.Header.Close />}
          onClick={onCloseCallback}
        />
      </SurveyContainerHeader>
      {QUESTION.map((q, index) => (
        <SurveyBox key={q}>
          <span>{`Q${index + 1}.`}</span>
          <SurveyContent>{q}</SurveyContent>
          <ButtonGroup>
            <YesButton
              isActive={answer[index] === "yes"}
              onClick={() => {
                submitAnswer(index, "yes");
              }}
            >
              예
            </YesButton>
            <NoButton
              isActive={answer[index] === "no"}
              onClick={() => {
                submitAnswer(index, "no");
              }}
            >
              아니요
            </NoButton>
          </ButtonGroup>
        </SurveyBox>
      ))}
    </SurveyContainer>
  );
};
