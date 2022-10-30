import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgCardArrow = ({
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
            width={44}
            height={44}
            viewBox="0 0 44 44"
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
                d="M34.2139 28.2143L22.071 16.0715L9.92815 28.2143"
                stroke="currentColor"
                strokeWidth={2.14286}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgCardArrow
