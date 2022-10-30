import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgHome = ({
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
            width={28}
            height={28}
            viewBox="0 0 28 28"
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
                d="M5 21.5V10.9782C5 10.361 5.28494 9.77838 5.77212 9.39946L12.7721 3.95502C13.4943 3.39329 14.5057 3.39329 15.2279 3.95502L22.2279 9.39946C22.7151 9.77838 23 10.361 23 10.9782V21.5C23 22.6046 22.1046 23.5 21 23.5H7C5.89543 23.5 5 22.6046 5 21.5Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 23.5V16.5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgHome
