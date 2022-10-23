import { forwardRef } from 'react'

interface Props {
    children?: React.ReactNode
}

export const StarSvg = forwardRef<SVGPathElement, Props>((props, ref) => {
    return (
        <svg width="300" height="300" viewBox="0 0 500 500">
            <path
                ref={ref}
                d="M127.35 118.162L179.451 2L226.65 118.162L352 139.943L247.938 224.191L278.751 352L179.451 280.457L70.6275 352L102.56 224.191L2 139.943L127.35 118.162Z"
                fill="none"
            />
        </svg>
    )
})
