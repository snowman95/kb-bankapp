import React, { useCallback, useEffect, useState } from 'react'
import { css, SerializedStyles } from '@emotion/react'
import { colors } from '../Colors'
import {
    ICON_BORDER_RADIUS_DIRECTION,
    ICON_DIRECTION,
    ICON_SIZE
} from './constant'

type ColorState = {
    DISABLED?: string
    IDLE?: string
    PRESSED?: string
    HOVER?: string
}

export interface THEMEprops {
    /** 아이콘 색상 설정 */
    ICON_COLOR?: ColorState
    /** 버튼 배경 색상 설정 */
    BG_COLOR?: ColorState
    /** 버튼 그림자 설정 */
    BG_SHADOW?: string
    /** 버튼 사이즈 설정 */
    SIZE?: 'TINY' | 'SMALL' | 'MEDIUM' | 'LARGE'
    /** Border (테두리) 둥근 정도  설정 */
    BD_RADIUS?: 'ALL' | 'UP' | 'RIGHT' | 'DOWN' | 'LEFT' | 'CIRCLE'
    /** Border (테두리) 색상 설정 */
    BD_COLOR?: string
    /** 버튼의 방향을 설정합니다. UP이 기본상태입니다. */
    DIR?: 'UP' | 'RIGHT' | 'DOWN' | 'LEFT'
}

export const THEME: {
    [key in
        | 'CUSTOM'
        | 'HEADER'
        | 'PAY'
        | 'KBPICK'
        | 'STAR'
        | 'CHAT']: THEMEprops
} = {
    CUSTOM: {
        ICON_COLOR: {
            IDLE: '#000',
            DISABLED: colors.neutral90
        },
        BG_COLOR: {},
        BD_RADIUS: 'ALL',
        SIZE: 'LARGE'
    },
    HEADER: {
        ICON_COLOR: {
            IDLE: '#000',
            DISABLED: colors.neutral90
        },
        BG_COLOR: {},
        BD_RADIUS: 'ALL',
        SIZE: 'SMALL',
        DIR: 'UP'
    },
    PAY: {
        ICON_COLOR: {
            IDLE: colors.neutral60,
            DISABLED: colors.neutral95
        },
        BG_COLOR: {},
        BD_RADIUS: 'ALL',
        SIZE: 'SMALL',
        DIR: 'UP'
    },
    KBPICK: {
        ICON_COLOR: {
            IDLE: colors.neutral20,
            DISABLED: colors.neutral95
        },
        BG_COLOR: {
            DISABLED: colors.neutral95,
            PRESSED: colors.neutral99
        },
        BD_RADIUS: 'ALL',
        SIZE: 'MEDIUM',
        DIR: 'UP'
    },
    STAR: {
        ICON_COLOR: {
            IDLE: colors.primary1,
            DISABLED: colors.neutral95
        },
        BG_COLOR: {},
        SIZE: 'TINY',
        BD_RADIUS: 'ALL',
        DIR: 'UP'
    },
    CHAT: {
        ICON_COLOR: {
            IDLE: colors.neutral60,
            DISABLED: colors.neutral95
        },
        BG_COLOR: {},
        SIZE: 'SMALL',
        DIR: 'UP'
    }
}

export interface ButtonIconProps {
    /** 아이콘의 유형을 설정합니다. */
    icon: React.ReactElement
    /** 테마 설정 */
    theme: keyof typeof THEME
    /** theme을 CUSTOM으로 했거나, 별도로 지정하고 싶은 경우에 이것을 정의하시오 */
    custom?: THEMEprops

    /** icon 의 색상을 오버라이드 하지 않습니다. */
    iconColorManualControl?: boolean
    /** 사이즈 설정 */
    size?: number | string
    /** 사용자의 편의를 위해 패딩값으로 아이콘보다 크기 넓게 클릭 가능한 영역을 설정합니다. */
    padding?: number | string
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
    /** css방식의 custom emotion 태그를 사용할 수 있습니다. */
    emotionCss?: SerializedStyles
}
const IconButton = ({
    icon,
    theme,
    custom,
    iconColorManualControl,
    size,
    padding,
    disabled,
    onClick,
    emotionCss
}: ButtonIconProps): React.ReactElement => {
    const iconTheme = { ...THEME[theme] }
    if (custom) {
        Object.keys(custom).forEach(item => {
            if (typeof custom[item] === 'object') {
                iconTheme[item] = { ...iconTheme[item], ...custom[item] }
            } else {
                iconTheme[item] = custom[item]
            }
        })
    }
    const [iconColor, setIconColor] = useState(iconTheme.ICON_COLOR?.IDLE)

    const handleButtonDown = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (
                !iconColorManualControl &&
                !disabled &&
                iconTheme.ICON_COLOR?.PRESSED
            )
                setIconColor(iconTheme.ICON_COLOR?.PRESSED)
        },
        []
    )
    const handleButtonUp = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (
                !iconColorManualControl &&
                !disabled &&
                iconTheme.ICON_COLOR?.IDLE
            )
                setIconColor(iconTheme.ICON_COLOR?.IDLE)
        },
        []
    )
    const handleHover = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (
                !iconColorManualControl &&
                !disabled &&
                iconTheme.ICON_COLOR?.HOVER
            )
                setIconColor(iconTheme.ICON_COLOR?.HOVER)
        },
        []
    )
    const handleLeave = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            if (
                !iconColorManualControl &&
                !disabled &&
                iconTheme.ICON_COLOR?.HOVER &&
                iconTheme.ICON_COLOR?.IDLE
            ) {
                setIconColor(iconTheme.ICON_COLOR?.IDLE)
            }
        },
        []
    )

    useEffect(() => {
        if (!iconColorManualControl) {
            setIconColor(
                disabled
                    ? iconTheme.ICON_COLOR?.DISABLED
                    : iconTheme.ICON_COLOR?.IDLE
            )
        }
    }, [disabled])

    const clonedIcon = iconColorManualControl
        ? React.cloneElement(icon)
        : React.cloneElement(icon, { color: iconColor })

    return (
        <button
            onClick={onClick}
            onMouseDown={handleButtonDown}
            onMouseUp={handleButtonUp}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            disabled={disabled}
            css={[
                css`
                    // default style
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    box-sizing: border-box;
                    outline: none;
                    border: none;
                    padding: 0;

                    // custom style
                    background-color: ${iconTheme.BG_COLOR?.IDLE
                        ? iconTheme.BG_COLOR?.IDLE
                        : 'transparent'};
                    &:hover {
                        background-color: ${iconTheme.BG_COLOR?.HOVER ||
                        iconTheme.BG_COLOR?.IDLE ||
                        'transparent'};
                    }
                    &:active {
                        background-color: ${iconTheme.BG_COLOR?.PRESSED ||
                        iconTheme.BG_COLOR?.IDLE ||
                        'transparent'};
                    }
                    &:disabled {
                        cursor: not-allowed;
                        background-color: ${iconTheme.BG_COLOR?.DISABLED ||
                        iconTheme.BG_COLOR?.IDLE ||
                        'transparent'};
                    }
                    ${iconTheme.BG_SHADOW
                        ? `box-shadow: ${iconTheme.BG_SHADOW}`
                        : ''};
                    ${iconTheme.BD_RADIUS
                        ? `border-radius: ${
                              ICON_BORDER_RADIUS_DIRECTION[iconTheme.BD_RADIUS]
                          }`
                        : ''};
                    ${iconTheme.BD_COLOR
                        ? `border: 1px solid ${iconTheme.BD_COLOR}`
                        : ''};
                    ${iconTheme.DIR
                        ? `transform: rotate(${
                              ICON_DIRECTION[iconTheme.DIR]
                          }deg)`
                        : ''};
                    ${size
                        ? `width: ${
                              typeof size === 'number' ? `${size}px` : size
                          }`
                        : iconTheme.SIZE
                        ? `width: ${ICON_SIZE[iconTheme.SIZE]}`
                        : ''};
                    ${size
                        ? `height: ${
                              typeof size === 'number' ? `${size}px` : size
                          }`
                        : iconTheme.SIZE
                        ? `height: ${ICON_SIZE[iconTheme.SIZE]}`
                        : ''};
                `,
                padding && paddingStyle(padding),
                emotionCss
            ]}
        >
            {clonedIcon}
        </button>
    )
}
IconButton.defaultProps = {
    icon: '',
    iconColorManualControl: false,
    disabled: false,
    onclick: () => console.log('icon button clicked')
}

export default IconButton

export const paddingStyle = (padding: number | string) => {
    let cssValue = padding
    if (typeof padding === 'string') {
        const test = padding.split(' ').map(item => {
            if (item === '0') return '0'

            if (item.length !== String(parseInt(item)).length) {
                return item
            }

            return `${parseInt(item)}px`
        })

        cssValue = test.join(' ')
    }

    return css({
        padding: cssValue
    })
}
