import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgAccount = ({
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
            <rect width={32} height={32} fill="white" fillOpacity={0.5} />
            <path
                d="M24.5 16.5H8.5V8C8.5 7.44772 8.94772 7 9.5 7H23.5C24.0523 7 24.5 7.44772 24.5 8V16.5Z"
                stroke="currentColor"
                strokeWidth={1.5}
            />
            <path d="M11 9.5H15" stroke="currentColor" strokeLinecap="round" />
            <path
                d="M6.33013 24.7455L8.5 16.5H24.5L26.2461 24.794C26.377 25.4155 25.9027 26 25.2676 26H7.2972C6.64153 26 6.16326 25.3796 6.33013 24.7455Z"
                stroke="currentColor"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export default SvgAccount
