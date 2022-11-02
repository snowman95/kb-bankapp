import * as React from 'react'
import { SVGProps } from 'react'
import { SvgBaseProps } from 'src/assets/svgr/types'
const SvgCar = ({ title, desc, titleId, descId, ...props }: SvgBaseProps) => {
    let ariaLabelledBy = titleId ? titleId : ''
    ariaLabelledBy += desc && descId ? ` ${descId}` : ''
    props['aria-labelledby'] = ariaLabelledBy
    return (
        <svg
            width={26}
            height={24}
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby={ariaLabelledBy}
            aria-hidden={!!ariaLabelledBy}
            {...props}
        >
            {!!title && <title id={titleId}>{title}</title>}
            {!!desc && <desc id={descId}>{desc}</desc>}
            <path
                d="M6.36728 1.90421L5.67792 1.60877V1.60877L6.36728 1.90421ZM3.3466 8.95245V9.70245H3.84115L4.03596 9.24789L3.3466 8.95245ZM20.172 1.98098L19.4657 2.23323V2.23323L20.172 1.98098ZM22.6618 8.95245L21.9555 9.20471L22.1332 9.70245H22.6618V8.95245ZM22.7116 19.4525V18.7025H21.9348L21.9621 19.4788L22.7116 19.4525ZM18.1429 19.4525L18.8924 19.4788L18.9197 18.7025H18.1429V19.4525ZM7.85515 19.4525V18.7025H7.0783L7.10562 19.4788L7.85515 19.4525ZM3.28641 19.4525L4.03595 19.4788L4.06327 18.7025H3.28641V19.4525ZM5.67792 1.60877L2.65724 8.65701L4.03596 9.24789L7.05664 2.19965L5.67792 1.60877ZM7.59276 0.34613C6.75939 0.34613 6.0062 0.84278 5.67792 1.60877L7.05664 2.19965C7.14855 1.98518 7.35943 1.84613 7.59276 1.84613V0.34613ZM18.9164 0.34613H7.59276V1.84613H18.9164V0.34613ZM20.8783 1.72873C20.5822 0.899597 19.7968 0.34613 18.9164 0.34613V1.84613C19.1629 1.84613 19.3828 2.00109 19.4657 2.23323L20.8783 1.72873ZM23.3681 8.7002L20.8783 1.72873L19.4657 2.23323L21.9555 9.20471L23.3681 8.7002ZM23.6667 8.20245H22.6618V9.70245H23.6667V8.20245ZM25.75 10.2857C25.75 9.13517 24.8173 8.20245 23.6667 8.20245V9.70245C23.9889 9.70245 24.25 9.9636 24.25 10.2857H25.75ZM25.75 18.1192V10.2857H24.25V18.1192H25.75ZM23.6667 20.2025C24.8173 20.2025 25.75 19.2697 25.75 18.1192H24.25C24.25 18.4413 23.9889 18.7025 23.6667 18.7025V20.2025ZM22.7116 20.2025H23.6667V18.7025H22.7116V20.2025ZM21.9621 19.4788C21.9626 19.4938 21.9629 19.5089 21.9629 19.524H23.4629C23.4629 19.4913 23.4623 19.4586 23.4611 19.4261L21.9621 19.4788ZM21.9629 19.524V21.2383H23.4629V19.524H21.9629ZM21.9629 21.2383C21.9629 21.9286 21.4032 22.4882 20.7129 22.4882V23.9882C22.2317 23.9882 23.4629 22.757 23.4629 21.2383H21.9629ZM20.7129 22.4882H20.1415V23.9882H20.7129V22.4882ZM20.1415 22.4882C19.4512 22.4882 18.8916 21.9286 18.8916 21.2383H17.3916C17.3916 22.757 18.6228 23.9882 20.1415 23.9882V22.4882ZM18.8916 21.2383V19.524H17.3916V21.2383H18.8916ZM18.8916 19.524C18.8916 19.5089 18.8919 19.4938 18.8924 19.4788L17.3933 19.4261C17.3922 19.4586 17.3916 19.4913 17.3916 19.524H18.8916ZM7.85515 20.2025H18.1429V18.7025H7.85515V20.2025ZM8.60641 19.524C8.60641 19.4913 8.60583 19.4586 8.60469 19.4261L7.10562 19.4788C7.10614 19.4938 7.10641 19.5089 7.10641 19.524H8.60641ZM8.60641 21.2383V19.524H7.10641V21.2383H8.60641ZM5.85649 23.9882C7.37523 23.9882 8.60641 22.757 8.60641 21.2383H7.10641C7.10641 21.9286 6.5468 22.4882 5.85649 22.4882V23.9882ZM5.28508 23.9882H5.85649V22.4882H5.28508V23.9882ZM2.53516 21.2383C2.53516 22.757 3.76634 23.9882 5.28508 23.9882V22.4882C4.59477 22.4882 4.03516 21.9286 4.03516 21.2383H2.53516ZM2.53516 19.524V21.2383H4.03516V19.524H2.53516ZM2.53688 19.4261C2.53573 19.4586 2.53516 19.4913 2.53516 19.524H4.03516C4.03516 19.5089 4.03542 19.4938 4.03595 19.4788L2.53688 19.4261ZM2.33328 20.2025H3.28641V18.7025H2.33328V20.2025ZM0.25 18.1192C0.25 19.2697 1.18272 20.2025 2.33328 20.2025V18.7025C2.01114 18.7025 1.75 18.4413 1.75 18.1192H0.25ZM0.25 10.2857V18.1192H1.75V10.2857H0.25ZM2.33328 8.20245C1.18272 8.20245 0.25 9.13517 0.25 10.2857H1.75C1.75 9.9636 2.01114 9.70245 2.33328 9.70245V8.20245ZM3.3466 8.20245H2.33328V9.70245H3.3466V8.20245Z"
                fill="currentColor"
            />
            <circle
                cx={6.71531}
                cy={13.6672}
                r={1.53563}
                stroke="currentColor"
                strokeWidth={1.5}
            />
            <circle
                cx={19.2847}
                cy={13.6672}
                r={1.53563}
                stroke="currentColor"
                strokeWidth={1.5}
            />
            <path
                d="M2.5 8.95245H23.5"
                stroke="currentColor"
                strokeWidth={1.5}
            />
        </svg>
    )
}
export default SvgCar