import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgMembership = ({
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
                d="M10 16L10 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 16L13 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 16L16 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 16L19 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 10.5V7H11.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M8 17V20.5H11.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M21 10.5V7H17.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M21 17V20.5H17.5"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default SvgMembership
