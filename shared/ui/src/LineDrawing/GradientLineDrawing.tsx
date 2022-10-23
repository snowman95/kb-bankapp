import { GradientPath } from 'gradient-path'
import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { StarSvg } from './Path'
const GAP = 0.01

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
    if (v > 1 - GAP * 2) {
        return [
            { color: mainColor, pos: 0 },
            { color: mainColor, pos: 1 }
        ]
    } else if (v > GAP * 2) {
        return playReverse
            ? [
                  { color: 'white', pos: 1 - v - GAP * 2 },
                  { color: pointColor, pos: 1 - v - GAP },
                  { color: mainColor, pos: 1 - v }
              ]
            : [
                  { color: mainColor, pos: v - GAP * 2 },
                  { color: pointColor, pos: v },
                  { color: 'white', pos: v + GAP }
              ]
    }
    return [
        { color: 'white', pos: 0 },
        { color: 'white', pos: 1 }
    ]
}

const reset = () => {
    const elements = document.querySelectorAll('.element-path')
    elements.forEach(element => element.remove())
}

interface GradientLineDrawingProps {
    duration: number
    lineWidth: number
    playReverse: boolean
    mainColor: string
    pointColor: string
}

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

export const GradientLineDrawing = ({
    duration,
    lineWidth,
    playReverse,
    mainColor,
    pointColor
}: GradientLineDrawingProps) => {
    const pathRef = useRef<SVGPathElement>(null)
    const [gp, setGp] = useState<GP>()
    useEffect(() => {
        if (!gp) {
            if (!pathRef) return
            const newGp = new GradientPath({
                path: pathRef?.current,
                segments: 80, // 얼마나 많은 다른 색상을 표시?
                samples: 10, //  샘플이 많을수록 경로가 더 구체적으로 둥글게 됩니다.
                precision: 2 // Optional 경로의 각 점에 대해 유지할 소수 자릿수
            })
            setGp(newGp)
        }
    }, [])
    useEffect(() => {
        if (!gp) return
        const controls = animate(0, 1, {
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
        return controls.stop
    })
    return <StarSvg ref={pathRef} />
}
