import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgCardRegistration = ({
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
                d="M14 1V27"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="square"
            />
            <path
                d="M27 14L0.999999 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="square"
            />
        </svg>
    )
}
export default SvgCardRegistration
