/** @jsx jsx */
/** @jsxFrag pragma */
import React from 'react'
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '.'

export const ColorForDisplay = () => {
    return (
        <ColorContainer>
            {Object.keys(colors).map(key => {
                const propsStyle = css`
                    background-color: ${colors[key]};
                `
                return (
                    <ColorBox key={key} css={propsStyle}>
                        <figure
                            css={css`
                                ${(key === 'neutral0' || key === 'neutral10') &&
                                `color: white`}
                            `}
                        >
                            {key}
                        </figure>
                    </ColorBox>
                )
            })}
        </ColorContainer>
    )
}

const ColorContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const ColorBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    border: 1px solid lightblue;
`
