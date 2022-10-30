import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgTransferArrow = ({
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
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3032 10.4459C13.1358 10.6133 12.8645 10.6133 12.6971 10.4459L8.143 5.89181L3.5889 10.4459C3.42153 10.6133 3.15018 10.6133 2.98281 10.4459C2.81544 10.2785 2.81544 10.0072 2.98281 9.83982L7.83995 4.98267C8.00732 4.81531 8.27868 4.81531 8.44604 4.98267L13.3032 9.83982C13.4706 10.0072 13.4706 10.2785 13.3032 10.4459Z"
                fill="currentColor"
            />
        </svg>
    )
}
export default SvgTransferArrow
