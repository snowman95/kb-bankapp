/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as Icon from '../assets/svgr'
import styled from '@emotion/styled'
import React from 'react'

/**
 * width, height 값을 넣지 않으면 기본 사이즈 사용
 * width, height 값을 넣어서 사이즈 변경 가능
 * color 값을 넣어서 색상 변경 가능
 */
export const Icons = () => {
    const iconArray: any[] = []
    Object.keys(Icon).forEach(icon => {
        Object.keys(Icon[icon]).forEach(i => {
            iconArray.push(Icon[icon][i])
        })
    })

    return (
        <IconContainer>
            <IconBox>
                {iconArray.map((icon, index) => React.createElement(icon))}
            </IconBox>
        </IconContainer>
    )
}
const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const IconBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export default {
    title: 'components/Icon/Display', // | 안 쓰도록 조심
    component: Icons
}
