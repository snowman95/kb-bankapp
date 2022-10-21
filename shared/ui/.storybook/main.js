const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack4',
        channelOptions: { allowFunction: false, maxDepth: 10 }
    },
    features: {
        emotionAlias: false
    },
    // 버전 6에서는 addon.js 대신 main.js에서 추가해야 함.
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        { name: '@storybook/addon-docs', options: { configureJSX: true } }
    ],
    webpackFinal: async config => {
        config.resolve.plugins.push(new TsconfigPathsPlugin())
        // React preset + Emotion props
        config.module.rules[0].use[0].options.presets = [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
            require.resolve('@emotion/babel-preset-css-prop')
        ]

        return config
    }
    // 2021버전에서는 config.js대신 main.js로 바뀜
}
