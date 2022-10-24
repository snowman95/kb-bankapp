/** @jsx jsx */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { jsx, css } from '@emotion/react'
import { GradientLineDrawing } from './GradientLineDrawing'
import { colors } from '../Colors'

export default {
    title: 'components/LineDrawing', // | 안 쓰도록 조심
    component: GradientLineDrawing
}
const Template: ComponentStory<typeof GradientLineDrawing> = args => (
    <GradientLineDrawing {...args} />
)
export const StarLineDrawing = Template.bind({})
StarLineDrawing.args = {
    duration: 1,
    lineWidth: 9,
    playReverse: true,
    mainColor: colors.primary2,
    pointColor: colors.primary3
}
