/* eslint-disable no-irregular-whitespace */
const dynamicTitlePlugin = require('./plugins/svg-dynamic-title-plugin')

const template = (
    { imports, interfaces, componentName, props, jsx, exports }, // variables
    { tpl, options } // context
) => tpl`
${imports};
${interfaces};

import {SvgBaseProps} from 'src/assets/svgr/types'

const ${componentName} = ({
  size,
  title,
  desc,
  titleId,
  descId,
  ...props
} : SvgBaseProps) => {
  let ariaLabelledBy = titleId ? titleId : ''
  ariaLabelledBy += desc && descId ? \` \${descId}\` : ''
  props['aria-labelledby'] = ariaLabelledBy
  return (${jsx})
}
${exports};
`

module.exports = {
    template,
    typescript: true,
    outDir: 'src/assets/svgr',
    jsx: {
        babelConfig: {
            plugins: [dynamicTitlePlugin]
        }
    },
    svgProps: {
        'aria-labelledby': '{ariaLabelledBy}',
        'aria-hidden': '{!!ariaLabelledBy}'
    },
    svgoConfig: {
        plugins: [
            {
                name: 'removeAttrs',
                params: {
                    attrs: '' //'(fill)'
                }
            }
        ]
    }
}
