import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import 'react';
import { jsx } from '@emotion/react';

var _excluded = ["title", "titleId"];
var SvgArrow = function SvgArrow(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return jsx("svg", _extends({
    width: 18,
    height: 10,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img",
    "aria-labelledby": titleId
  }, props), title ? jsx("title", {
    id: titleId
  }, title) : null, jsx("path", {
    d: "M16.505 9.495a.7.7 0 0 0 .99-.99l-.99.99ZM9 1l.495-.495a.7.7 0 0 0-.99 0L9 1ZM.505 8.505a.7.7 0 0 0 .99.99l-.99-.99Zm16.99 0-8-8-.99.99 8 8 .99-.99Zm-8.99-8-8 8 .99.99 8-8-.99-.99Z",
    fill: "currentColor"
  }));
};

export { SvgArrow as default };
