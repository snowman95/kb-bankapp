/** @jsxImportSource @emotion/react */
import { colors, LineDrawing } from "@kb-bankapp/ui";
import { useEffect, useRef, useState } from "react";
import { Icon, SplashContainer } from "./styles";
import 리브Icon from "@src/assets/logo/logo-리브.png";
import 보험Icon from "@src/assets/logo/logo-보험.png";
import 부동산Icon from "@src/assets/logo/logo-부동산.png";
import 은행Icon from "@src/assets/logo/logo-은행.png";
import 증권Icon from "@src/assets/logo/logo-증권.png";
import 페이Icon from "@src/assets/logo/logo-페이.png";
import { css } from "@emotion/react";

export const Splash = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [gp, setGp] = useState<any>();

  useEffect(() => {
    if (!gp) {
      if (pathRef?.current) {
        const newGp = LineDrawing.createGradientPath(pathRef);
        if (newGp) {
          setGp(newGp);
        }
      }
    } else {
      LineDrawing.setPathAnimation({
        gp,
        duration: 1,
        lineWidth: 9,
        playReverse: true,
        mainColor: colors.primary2,
        pointColor: colors.primary3,
      });
    }
  }, [gp]);

  return (
    <>
      <SplashContainer
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 3 }}
      >
        <Icon
          src={리브Icon}
          alt="리브"
          initial={{ x: 0, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 1 }}
        />
        <Icon
          src={보험Icon}
          alt="보험"
          css={css`
            border: 1px solid ${colors.neutral90};
          `}
          initial={{ x: -100, y: -30 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 1.4 }}
        />
        <Icon
          src={증권Icon}
          alt="증권"
          initial={{ x: -60, y: 100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 1.8 }}
        />
        <Icon
          src={페이Icon}
          alt="페이"
          initial={{ x: 60, y: 100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 2.2 }}
        />
        <Icon
          src={부동산Icon}
          alt="부동산"
          css={css`
            border: 1px solid ${colors.neutral90};
          `}
          initial={{ x: 100, y: -30 }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 2.6 }}
        />
        <LineDrawing.StarSvg ref={pathRef} />
      </SplashContainer>
      <Icon
        src={은행Icon}
        alt="은행"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.5 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 3.4 }}
      />
    </>
  );
};
