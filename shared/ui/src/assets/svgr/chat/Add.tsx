import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgAdd = ({ title, desc, titleId, descId, ...props }: SvgBaseProps) => {
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
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M14.0002 22L14.0002 6"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21.9998 14H6.00023"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgAdd
