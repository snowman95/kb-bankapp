import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrow = ({
    title,
    titleId,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width={18}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            d="M16.505 9.495a.7.7 0 0 0 .99-.99l-.99.99ZM9 1l.495-.495a.7.7 0 0 0-.99 0L9 1ZM.505 8.505a.7.7 0 0 0 .99.99l-.99-.99Zm16.99 0-8-8-.99.99 8 8 .99-.99Zm-8.99-8-8 8 .99.99 8-8-.99-.99Z"
            fill="currentColor"
        />
    </svg>
)
export default SvgArrow
