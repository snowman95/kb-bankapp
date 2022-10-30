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
export const HeaderArrow = Template.bind({})
HeaderArrow.args = {
    ...templateIcon.args,
    icon: <Icon.Header.Arrow />
}
export const HeaderHome = Template.bind({})
HeaderHome.args = {
    ...templateIcon.args,
    icon: <Icon.Header.Home />
}
export const HeaderMenu = Template.bind({})
HeaderMenu.args = {
    ...templateIcon.args,
    icon: <Icon.Header.Menu />
}
export const CardArrow = Template.bind({})
CardArrow.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.CardArrow />
}
export const CardRegistration = Template.bind({})
CardRegistration.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.CardRegistration />
}
export const Membership = Template.bind({})
Membership.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.Membership />
}
export const OnSite = Template.bind({})
OnSite.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.OnSite />
}
export const QrCode = Template.bind({})
QrCode.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.QrCode />
}
export const TransferArrow = Template.bind({})
TransferArrow.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.TransferArrow />
}
export const Vibration = Template.bind({})
Vibration.args = {
    ...templateIcon.args,
    icon: <Icon.Pay.Vibration />
}
