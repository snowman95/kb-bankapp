/** @jsx jsx */
import IconButton from './IconButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { jsx, css } from '@emotion/react'
import * as Icon from '../assets/svgr'

export default {
    title: 'components/Icon', // | 안 쓰도록 조심
    component: IconButton
}
const Template: ComponentStory<typeof IconButton> = args => (
    <IconButton {...args} />
)
const templateIcon = Template.bind({})
templateIcon.args = {
    rotationDir: 'LEFT',
    disabled: false,
    onclick: () => console.log('Icon clicked')
}

export const ArrowIcon = Template.bind({})
ArrowIcon.args = {
    ...templateIcon.args,
    icon: <Icon.Memo.Arrow />
}

export const CloseIcon = Template.bind({})
CloseIcon.args = {
    ...templateIcon.args,
    icon: <Icon.Memo.Close />
}

export const ListIcon = Template.bind({})
ListIcon.args = {
    ...templateIcon.args,
    icon: <Icon.Memo.List />
}

export const List2Icon = Template.bind({})
List2Icon.args = {
    ...templateIcon.args,
    icon: <Icon.Memo.List />
}
