import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgFinancialProducts = ({
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
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <rect width={32} height={32} fill="white" />
            <path
                d="M20 11C20 8.23858 17.9853 6 15.5 6C13.0147 6 11 8.23858 11 11"
                stroke="currentColor"
                strokeWidth={1.5}
            />
            <path
                d="M22.1916 11H8.33725C7.85277 11 7.43799 11.3473 7.35282 11.8242L5.20996 23.8242C5.10051 24.4371 5.57176 25 6.19439 25H24.763C25.3997 25 25.8742 24.413 25.7408 23.7905L23.1694 11.7905C23.0706 11.3294 22.6631 11 22.1916 11Z"
                stroke="currentColor"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export default SvgFinancialProducts
