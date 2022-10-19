import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgArrow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M26.4286 7.1427L14.2857 19.2856L26.4286 31.4284"
      stroke="currentColor"
      strokeWidth="2.14286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgArrow;
