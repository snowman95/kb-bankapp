import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgTail = ({ title, desc, titleId, descId, ...props }: SvgBaseProps) => {
    let ariaLabelledBy = titleId ? titleId : ''
    ariaLabelledBy += desc && descId ? ` ${descId}` : ''
    props['aria-labelledby'] = ariaLabelledBy
    return (
        <svg
            width={18}
            height={14}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M1.17237 14H17C17.5523 14 18 13.5523 18 13V1.92066C18 1.11163 17.0893 0.637481 16.4265 1.10143L0.598903 12.1808C-0.20207 12.7414 0.194654 14 1.17237 14Z"
                fill="currentColor"
            />
        </svg>
    )
}
export default SvgTail
