import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgClose = ({ title, desc, titleId, descId, ...props }: SvgBaseProps) => {
    let ariaLabelledBy = titleId ? titleId : ''
    ariaLabelledBy += desc && descId ? ` ${descId}` : ''
    props['aria-labelledby'] = ariaLabelledBy
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M18.4277 18.4286L5.57059 5.57144"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.4284 5.57144L5.57129 18.4286"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgClose
