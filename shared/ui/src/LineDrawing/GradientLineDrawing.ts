import { GradientPath } from 'gradient-path'
import { animate } from 'framer-motion'

const GAP = 0.01
const GAP_MUL = 10

interface GP {
    render({
        type,
        fill,
        width
    }: {
        type: 'path' | 'circle'
        fill: { color: string; pos: number }[]
        width: number
    }): void
}

interface setPathAnimationProps {
    gp: GP
    duration: number
    lineWidth: number
    playReverse: boolean
    mainColor: string
    pointColor: string
}

const getGradientColor = ({
    v,
    playReverse,
    mainColor,
    pointColor
}: {
    v: number
    playReverse: boolean
    mainColor: string
    pointColor: string
}) => {
    if (v > 1 - GAP) {
        return [
            { color: mainColor, pos: 0 },
            { color: mainColor, pos: 1 }
        ]
    } else if (v >= GAP * GAP_MUL) {
        return playReverse
            ? [
                  { color: 'white', pos: 1 - v },
                  { color: pointColor, pos: 1 - v + GAP },
                  { color: mainColor, pos: 1 - v + GAP * GAP_MUL }
              ]
            : [
                  { color: mainColor, pos: v - GAP * GAP_MUL },
                  { color: pointColor, pos: v },
                  { color: 'white', pos: v + GAP }
              ]
    } else if (v >= (GAP * GAP_MUL) / 2) {
        return playReverse
            ? [
                  { color: 'white', pos: 1 - v },
                  { color: pointColor, pos: 1 - v + GAP },
                  { color: mainColor, pos: 1 - v + (GAP * GAP_MUL) / 2 }
              ]
            : [
                  { color: mainColor, pos: v - (GAP * GAP_MUL) / 2 },
                  { color: pointColor, pos: v },
                  { color: 'white', pos: v + GAP }
              ]
    } else if (v >= GAP) {
        return playReverse
            ? [
                  { color: 'white', pos: 1 - v },
                  { color: pointColor, pos: 1 - v + GAP }
              ]
            : [
                  { color: pointColor, pos: v },
                  { color: 'white', pos: v + GAP },
                  { color: 'white', pos: 1 }
              ]
    }
    return [
        { color: 'white', pos: 0 },
        { color: 'white', pos: v }
    ]
}

const reset = () => {
    const elements = document.querySelectorAll('.element-path')
    elements.forEach(element => element.remove())
}
export const createGradientPath = (
    pathRef: React.RefObject<SVGPathElement>
) => {
    if (pathRef?.current) {
        return new GradientPath({
            path: pathRef?.current,
            segments: 80, // 얼마나 많은 다른 색상을 표시?
            samples: 10, //  샘플이 많을수록 경로가 더 구체적으로 둥글게 됩니다.
            precision: 2 // Optional 경로의 각 점에 대해 유지할 소수 자릿수
        })
    }
}
export const setPathAnimation = ({
    gp,
    duration,
    lineWidth,
    playReverse,
    mainColor,
    pointColor
}: setPathAnimationProps) => {
    return animate(0, 1, {
        duration,
        onPlay: () => reset(),
        onRepeat: () => reset(),
        onUpdate: v => {
            gp.render({
                type: 'path',
                fill: getGradientColor({
                    v,
                    playReverse,
                    mainColor,
                    pointColor
                }),
                width: lineWidth
            })
        }
    })
}
