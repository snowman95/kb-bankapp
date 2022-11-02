/** @jsx jsx */
import React from 'react'
import { Story } from '@storybook/react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import * as Icon from '../assets/svgr'
import { colors } from '../Colors'
import IconButton, { THEMEprops, ButtonIconProps } from './IconButton'

export default {
    title: 'components/Icon/Button/Template', // | 안 쓰도록 조심
    component: IconButton
}

export const Template: Story<
    THEMEprops &
        ButtonIconProps & {
            ICON_COLOR_DISABLED: string
            ICON_COLOR_IDLE: string
            ICON_COLOR_PRESSED: string
            ICON_COLOR_HOVER: string
            BG_COLOR_DISABLED: string
            BG_COLOR_IDLE: string
            BG_COLOR_PRESSED: string
            BG_COLOR_HOVER: string
        }
> = ({
    ICON_COLOR_DISABLED,
    ICON_COLOR_IDLE,
    ICON_COLOR_PRESSED,
    ICON_COLOR_HOVER,
    BG_COLOR_DISABLED,
    BG_COLOR_IDLE,
    BG_COLOR_PRESSED,
    BG_COLOR_HOVER,
    BG_SHADOW,
    SIZE,
    BD_RADIUS,
    BD_COLOR,
    DIR,
    iconColorManualControl,
    padding,
    disabled,
    onClick,
    emotionCss
}) => {
    const custom = {
        ICON_COLOR: {
            DISABLED: ICON_COLOR_DISABLED,
            IDLE: ICON_COLOR_IDLE,
            PRESSED: ICON_COLOR_PRESSED,
            HOVER: ICON_COLOR_HOVER
        },
        BG_COLOR: {
            DISABLED: BG_COLOR_DISABLED,
            IDLE: BG_COLOR_IDLE,
            PRESSED: BG_COLOR_PRESSED,
            HOVER: BG_COLOR_HOVER
        },
        BG_SHADOW,
        SIZE,
        BD_RADIUS,
        BD_COLOR,
        DIR
    }
    const iconArray: any[] = []
    Object.keys(Icon).forEach(icon => {
        Object.keys(Icon[icon]).forEach(i => {
            iconArray.push(Icon[icon][i])
        })
    })
    return (
        <IconBox>
            {iconArray.map((icon, index) => {
                return (
                    <IconButton
                        key={index}
                        icon={React.createElement(icon)}
                        theme={'CUSTOM'}
                        custom={custom}
                        iconColorManualControl={iconColorManualControl}
                        padding={padding}
                        disabled={disabled}
                        onClick={onClick}
                        emotionCss={emotionCss}
                    />
                )
            })}
        </IconBox>
    )
}
Template.args = {
    ICON_COLOR_DISABLED: colors.neutral95,
    ICON_COLOR_IDLE: colors.neutral10,
    ICON_COLOR_PRESSED: colors.neutral95,
    ICON_COLOR_HOVER: colors.neutral95,
    BG_COLOR_DISABLED: colors.neutral95,
    BG_COLOR_IDLE: '#fff',
    BG_COLOR_PRESSED: '#fff',
    BG_COLOR_HOVER: colors.neutral99,
    SIZE: 'LARGE',
    BD_RADIUS: 'ALL',
    BD_COLOR: colors.neutral95,
    DIR: 'UP',
    iconColorManualControl: false,
    padding: 0,
    disabled: false,
    onClick: () => console.log('icon button clicked')
}

const IconBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
