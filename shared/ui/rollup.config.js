import commonjs from '@rollup/plugin-commonjs'
// import resolve from '@rollup/plugin-node-resolve'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias' // typescript paths 설정 해줬다면 꼭 필요
import path from 'path'
import postcss from 'rollup-plugin-postcss'
// import { terser } from 'rollup-plugin-terser'
// import external from 'rollup-plugin-peer-deps-external'
// import dts from 'rollup-plugin-dts'
// import prettier from 'rollup-plugin-prettier'
// import renameNodeModules from 'rollup-plugin-rename-node-modules'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx'] // 어떤 확장자를 처리 할 지 정함
// babel-preset-react-app를 사용한다면 BABEL_ENV를 필수로 설정해야함.
process.env.BABEL_ENV = 'production'

const pathEntries = [
    {
        find: '@src',
        replacement: path.resolve(__dirname, 'src')
    },
    {
        find: 'src',
        replacement: path.resolve(__dirname, 'src')
    },
    {
        find: '@modules',
        replacement: path.resolve(__dirname, 'modules')
    }
]

export default {
    external: [/@babel\/runtime/],
    input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
    output: [
        {
            dir: pkg.buildDir,
            format: 'es',
            exports: 'named',
            sourcemap: false,
            preserveModules: true,
            preserveModulesRoot: 'src'
            // 모듈 경로를 그대로 사용할 수 있게 함
            //  Field 'browser' doesn't contain a valid alias configuration 문제 발생
            // https://github.com/rollup/rollup/issues/3684 아직 해제되지 않은 문제인 것 같아서 옵션 사용 중단
        }
    ],
    plugins: [
        typescript(),
        // typescript에서 alias를 사용했다면 번들링시 명시해줘야 함.(절대경로시)
        alias({
            entries: pathEntries
        }),
        babel({
            babelHelpers: 'runtime',
            include: ['src/**/*'],
            exclude: 'node_modules/**',
            extensions
        }),
        // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌,
        nodeResolve({ extensions }),
        // https://velog.io/@peterkimzz/rollup-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8
        // commonJS 로 작성된 모듈들을 번들링 결과물에 포함시키려고 할 때 문제가 발생
        // CommonJS 로 작성된 모듈들을 ES6 바꾸어서 rollup이 해석할 수 있게 도와줍니다.
        commonjs({
            include: 'node_modules/**',
            extensions: [...extensions, '.js']
        }),
        /* peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음 */
        peerDepsExternal(),
        postcss({
            plugins: []
        }),
        url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
        svgr() // SVG를 컴포넌트로 사용 할 수 있게 해줌.
        // terser()
    ]
}
