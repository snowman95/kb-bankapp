import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import 'react';
import { jsx } from '@emotion/react';

var _excluded = ["title", "titleId"];
var SvgList = function SvgList(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return jsx("svg", _extends({
    width: 16,
    height: 18,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": titleId
  }, props), title ? jsx("title", {
    id: titleId
  }, title) : null, jsx("path", {
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    d: "M14.7 5.74V17.3M14.7.7v.04M7.7 5.74V17.3M7.7.7v.04M.7 5.74V17.3M.7.7v.04"
  }));
};

export { SvgList as default };
