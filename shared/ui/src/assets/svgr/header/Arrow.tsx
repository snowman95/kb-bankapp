import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgArrow = ({
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
            aria-labelledby={titleId}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M23 18.5L14.5 10L6 18.5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgArrow
