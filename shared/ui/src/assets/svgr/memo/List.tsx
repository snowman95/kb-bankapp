import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgList = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width={16}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            d="M14.7 5.74V17.3M14.7.7v.04M7.7 5.74V17.3M7.7.7v.04M.7 5.74V17.3M.7.7v.04"
        />
    </svg>
)
export default SvgList
