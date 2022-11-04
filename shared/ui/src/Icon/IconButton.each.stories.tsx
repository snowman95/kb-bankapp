/** @jsx jsx */
import { jsx } from '@emotion/react'
import * as Icon from '../assets/svgr'
import IconButton from './IconButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { colors } from '../Colors'

export default {
    title: 'components/Icon/Button/Each', // | 안 쓰도록 조심
    component: IconButton
}
const Template: ComponentStory<typeof IconButton> = args => (
    <IconButton {...args} />
)
const templateIcon = Template.bind({})
templateIcon.args = {
    disabled: false,
    onclick: () => console.log('icon button clicked')
}

export const HeaderArrow = Template.bind({})
HeaderArrow.args = {
    ...templateIcon.args,
    theme: 'HEADER',
    icon: <Icon.Header.Arrow />
}
export const HeaderHome = Template.bind({})
HeaderHome.args = {
    ...templateIcon.args,
    theme: 'HEADER',
    icon: <Icon.Header.Home />
}
export const HeaderMenu = Template.bind({})
HeaderMenu.args = {
    ...templateIcon.args,
    theme: 'HEADER',
    icon: <Icon.Header.Menu />
}
export const HeaderAlert = Template.bind({})
HeaderAlert.args = {
    ...templateIcon.args,
    theme: 'HEADER',
    icon: <Icon.Header.Alert />
}
export const HeaderSearch = Template.bind({})
HeaderSearch.args = {
    ...templateIcon.args,
    theme: 'HEADER',
    icon: <Icon.Header.Search />
}

export const CardArrow = Template.bind({})
CardArrow.args = {
    ...templateIcon.args,
    theme: 'PAY',
    size: 44,
    icon: <Icon.Pay.CardArrow />
}
export const CardRegistration = Template.bind({})
CardRegistration.args = {
    ...templateIcon.args,
    theme: 'PAY',
    custom: {
        ICON_COLOR: { IDLE: colors.neutral20 }
    },
    icon: <Icon.Pay.CardRegistration />
}
export const Membership = Template.bind({})
Membership.args = {
    ...templateIcon.args,
    theme: 'PAY',
    custom: {
        ICON_COLOR: { IDLE: colors.neutral100 }
    },
    icon: <Icon.Pay.Membership />
}
export const OnSite = Template.bind({})
OnSite.args = {
    ...templateIcon.args,
    theme: 'PAY',
    icon: <Icon.Pay.OnSite />
}
export const QrCode = Template.bind({})
QrCode.args = {
    ...templateIcon.args,
    theme: 'PAY',
    icon: <Icon.Pay.QrCode />
}
export const TransferArrow = Template.bind({})
TransferArrow.args = {
    ...templateIcon.args,
    theme: 'PAY',
    size: 16,
    icon: <Icon.Pay.TransferArrow />
}
export const Vibration = Template.bind({})
Vibration.args = {
    ...templateIcon.args,
    theme: 'PAY',
    size: 20,
    custom: {
        ICON_COLOR: { IDLE: colors.neutral50 }
    },
    icon: <Icon.Pay.Vibration />
}

export const KbpickAccount = Template.bind({})
KbpickAccount.args = {
    ...templateIcon.args,
    theme: 'KBPICK',
    icon: <Icon.Kbpick.Account />
}
export const KbpickCar = Template.bind({})
KbpickCar.args = {
    ...templateIcon.args,
    theme: 'KBPICK',
    size: 45.5,
    custom: {
        ICON_COLOR: { IDLE: '#000' },
        BD_RADIUS: 'CIRCLE'
    },
    icon: <Icon.Kbpick.Car />
}
export const KbpickChat = Template.bind({})
KbpickChat.args = {
    ...templateIcon.args,
    theme: 'KBPICK',
    icon: <Icon.Kbpick.Chat />
}
export const KbpickFinancialProducts = Template.bind({})
KbpickFinancialProducts.args = {
    ...templateIcon.args,
    theme: 'KBPICK',
    icon: <Icon.Kbpick.FinancialProducts />
}
export const KbpickMydata = Template.bind({})
KbpickMydata.args = {
    ...templateIcon.args,
    theme: 'KBPICK',

    icon: <Icon.Kbpick.Mydata />
}

export const Star = Template.bind({})
Star.args = {
    ...templateIcon.args,
    theme: 'STAR',
    icon: <Icon.Star.Star />
}
