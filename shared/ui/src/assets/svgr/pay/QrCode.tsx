import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgQrCode = ({
    size,
    title,
    desc,
    titleId,
    descId,
    ...props
}: SvgBaseProps) => {
    let ariaLabelledBy = titleId ? titleId : ''
    ariaLabelledBy += desc && descId ? ` ${descId}` : ''
    props['aria-labelledby'] = ariaLabelledBy
    return (
        <svg
            width={29}
            height={28}
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M10.5 13.5H19.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 10.5V7H12"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M8.5 17V20.5H12"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M21.5 10.5V7H18"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M21.5 17V20.5H18"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgQrCode
