/** @jsx jsx */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { jsx, css } from '@emotion/react'
import { GradientLineDrawing } from './GradientLineDrawing'

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
    lineWidth: 20,
    playReverse: true,
    mainColor: '#FFCC00',
    pointColor: '#60584C'
}
