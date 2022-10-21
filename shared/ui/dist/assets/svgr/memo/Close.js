import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import 'react';
import { jsx } from '@emotion/react';

var _excluded = ["title", "titleId"];
var SvgClose = function SvgClose(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return jsx("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": titleId
  }, props), title ? jsx("title", {
    id: titleId
  }, title) : null, jsx("path", {
    d: "m1 1.5 14 14m0-14-14 14",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round"
  }));
};

export { SvgClose as default };
