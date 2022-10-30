import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
    title?: string;
    titleId?: string;
}
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgStar = ({
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
            width={17}
            height={17}
            viewBox="0 0 17 17"
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
                d="M5.87231 2.05054C6.09315 0.942093 7.48915 0.568036 8.23462 1.41756L10.3194 3.79327C10.6154 4.13061 11.0585 4.30069 11.5042 4.24808L14.6431 3.87754C15.7655 3.74505 16.5527 4.95713 15.9751 5.92863L14.3599 8.64548C14.1305 9.03126 14.1057 9.5052 14.2935 9.91285L15.6158 12.7836C16.0887 13.8102 15.1792 14.9334 14.0768 14.6843L10.9938 13.9877C10.556 13.8887 10.0976 14.0116 9.76788 14.3161L7.44623 16.4609C6.61604 17.2279 5.26679 16.7099 5.16303 15.5845L4.87284 12.4371C4.83164 11.9902 4.57316 11.5922 4.18164 11.3727L1.4244 9.82748C0.438449 9.27492 0.514087 7.83166 1.55239 7.38519L4.45605 6.13662C4.86836 5.95932 5.16703 5.5905 5.25473 5.15033L5.87231 2.05054Z"
                fill="currentColor"
            />
        </svg>
    )
}
export default SvgStar
