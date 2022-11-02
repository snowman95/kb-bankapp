import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgChat = ({
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
                d="M6 16C6 10.4772 10.4772 6 16 6V6C21.5228 6 26 10.4772 26 16V16C26 21.5228 21.5228 26 16 26H6.39216C6.17557 26 6 25.8244 6 25.6078V16Z"
                stroke="currentColor"
                strokeWidth={1.5}
            />
            <circle cx={10.5} cy={16.5} r={1.5} fill="currentColor" />
            <circle cx={15.5} cy={16.5} r={1.5} fill="currentColor" />
            <circle cx={20.5} cy={16.5} r={1.5} fill="currentColor" />
        </svg>
    )
}
export default SvgChat
