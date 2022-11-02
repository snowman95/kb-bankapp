import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgWallet = ({
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
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M7.8 8.56H21C22.1046 8.56 23 9.45543 23 10.56V12.36M21.48 6.66V6.37785C21.48 5.13626 20.3605 4.19469 19.1373 4.40742L5.65732 6.75177C4.69934 6.91838 4 7.74984 4 8.7222V21C4 22.1046 4.89543 23 6 23H21C22.1046 23 23 22.1046 23 21V18.44"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                d="M17.7598 14C17.7598 13.4477 18.2075 13 18.7598 13H23.7598C24.3121 13 24.7598 13.4477 24.7598 14V17C24.7598 17.5523 24.3121 18 23.7598 18H18.7598C18.2075 18 17.7598 17.5523 17.7598 17V14Z"
                stroke="currentColor"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export default SvgWallet
