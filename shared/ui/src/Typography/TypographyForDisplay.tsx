/** @jsx jsx */
/** @jsxFrag pragma */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { typography } from '.'
import { colors } from '../Colors'

export const TypographyForDisplay = () => {
    return (
        <TypographyContainer>
            {Object.keys(typography).map(key => {
                const propsStyle = css`
                    font: ${typography[key]};
                `
                return (
                    <TypographyBox key={key}>
                        <TypographyFigure css={propsStyle}>
                            {key}
                        </TypographyFigure>
                        <span css={propsStyle}>{typography[key]}</span>
                    </TypographyBox>
                )
            })}
        </TypographyContainer>
    )
}
const TypographyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TypographyBox = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    background-color: ${colors.neutral95};
`
const TypographyFigure = styled.figure`
    display: flex;
    align-items: center;
    width: 20px;
`
