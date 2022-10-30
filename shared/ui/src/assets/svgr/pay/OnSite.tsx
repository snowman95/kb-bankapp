import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgOnSite = ({
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
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M10 13C9.72386 13 9.5 13.2239 9.5 13.5C9.5 13.7761 9.72386 14 10 14V13ZM11.9903 10.9019C11.9361 10.6312 11.6727 10.4556 11.4019 10.5097C11.1312 10.5639 10.9556 10.8273 11.0097 11.0981L11.9903 10.9019ZM12.5 16L12.0097 16.0981C12.0531 16.315 12.2339 16.4777 12.4543 16.4979C12.6746 16.5181 12.8821 16.3911 12.9642 16.1857L12.5 16ZM14.5 11L14.9789 10.8563C14.9178 10.6527 14.7346 10.51 14.5223 10.5005C14.3099 10.491 14.1147 10.6169 14.0358 10.8143L14.5 11ZM16 16L15.5211 16.1437C15.5845 16.3552 15.7792 16.5 16 16.5C16.2208 16.5 16.4155 16.3552 16.4789 16.1437L16 16ZM17.9789 11.1437C18.0583 10.8792 17.9082 10.6004 17.6437 10.5211C17.3792 10.4417 17.1004 10.5918 17.0211 10.8563L17.9789 11.1437ZM19 14C19.2761 14 19.5 13.7761 19.5 13.5C19.5 13.2239 19.2761 13 19 13V14ZM10 14H12V13H10V14ZM12.4903 13.4019L11.9903 10.9019L11.0097 11.0981L11.5097 13.5981L12.4903 13.4019ZM11.5097 13.5981L12.0097 16.0981L12.9903 15.9019L12.4903 13.4019L11.5097 13.5981ZM12.9642 16.1857L14.9642 11.1857L14.0358 10.8143L12.0358 15.8143L12.9642 16.1857ZM14.0211 11.1437L15.5211 16.1437L16.4789 15.8563L14.9789 10.8563L14.0211 11.1437ZM16.4789 16.1437L17.2289 13.6437L16.2711 13.3563L15.5211 15.8563L16.4789 16.1437ZM17.2289 13.6437L17.9789 11.1437L17.0211 10.8563L16.2711 13.3563L17.2289 13.6437ZM16.75 14H19V13H16.75V14Z"
                fill="currentColor"
            />
            <rect
                x={8.5}
                y={5.5}
                width={12}
                height={16}
                rx={1.5}
                stroke="currentColor"
            />
        </svg>
    )
}
export default SvgOnSite
