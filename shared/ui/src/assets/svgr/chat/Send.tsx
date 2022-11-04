import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgSend = ({ title, desc, titleId, descId, ...props }: SvgBaseProps) => {
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
            <g clipPath="url(#clip0_222_208)">
                <path
                    d="M14.4042 25.0231L21.6271 6.95671L3.56071 14.1796L7.77158 18.4026L18.0126 10.5712L10.1812 20.8122L14.4042 25.0231Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_222_208">
                    <rect width={28} height={28} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export default SvgSend
