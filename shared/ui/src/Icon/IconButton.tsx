import { SerializedStyles, css, jsx } from '@emotion/react'
import React from 'react'
import { IconSize, ICON_SIZE, ICON_DIRECTION, IconDirection } from './constant'

export interface IButtonIcon {
    /** 아이콘의 유형을 설정합니다. */
    icon: jsx.JSX.Element
    /** 아이콘 버튼 크기를 설정합니다. (default SMALL=28px) */
    size?: IconSize
    /** 회전 방향을 설정합니다. (default UP) */
    rotationDir?: IconDirection
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
    /** css방식의 custom emotion 태그를 사용할 수 있습니다. */
    emotionCss?: SerializedStyles
}

const IconButton = ({
    icon,
    size,
    disabled,
    rotationDir,
    onClick,
    emotionCss
}: IButtonIcon): React.ReactElement => {
    const clonedIcon = React.cloneElement(icon)
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            css={[
                css`
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    outline: none;
                    border: none;
                    padding: 0;
                    background-color: transparent;
                    &:disabled {
                        cursor: not-allowed;
                    }
                    width: ${ICON_SIZE[size || 'LARGE']};
                    height: ${ICON_SIZE[size || 'LARGE']};
                    transform: rotate(
                        ${ICON_DIRECTION[rotationDir || 'UP']}deg
                    );
                `,

                emotionCss
            ]}
        >
            {clonedIcon}
        </button>
    )
}
IconButton.defaultProps = {
    icon: 'Arrow',
    color: '#000',
    size: 'SMALL',
    rotationDir: 'UP',
    disabled: false,
    onclick: () => console.log('icon clicked')
}

export default IconButton
