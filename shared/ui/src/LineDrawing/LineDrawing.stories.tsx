/** @jsx jsx */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { jsx, css } from '@emotion/react'
import { colors } from '../Colors'
import { useEffect, useRef, useState } from 'react'
import { createGradientPath, setPathAnimation } from './GradientLineDrawing'
import { StarSvg } from './StarSvg'

interface LineDrawingProps {
    duration: number
    lineWidth: number
    playReverse: boolean
    mainColor: string
    pointColor: string
}

const LineDrawing = ({
    duration,
    lineWidth,
    playReverse,
    mainColor,
    pointColor
}: LineDrawingProps) => {
    const pathRef = useRef<SVGPathElement>(null)
    const [gp, setGp] = useState()

    useEffect(() => {
        if (!gp) {
            if (pathRef?.current) {
                const newGp = createGradientPath(pathRef)
                setGp(newGp)
            }
        } else {
            setPathAnimation({
                gp,
                duration,
                lineWidth,
                playReverse,
                mainColor,
                pointColor
            })
        }
    }, [gp])

    return <StarSvg ref={pathRef} />
}

export default {
    title: 'components/LineDrawing', // | 안 쓰도록 조심
    component: LineDrawing
}
const Template: ComponentStory<typeof LineDrawing> = args => (
    <LineDrawing {...args} />
)
export const StarLineDrawing = Template.bind({})
StarLineDrawing.args = {
    duration: 1,
    lineWidth: 9,
    playReverse: true,
    mainColor: colors.primary2,
    pointColor: colors.primary3
}
