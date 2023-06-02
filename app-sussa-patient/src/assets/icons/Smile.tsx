import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SvgSmile = ({ color, ...props }: SvgProps & {color: string}) => (
  <Svg
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <Path
      d="M14 25.667c6.443 0 11.667-5.224 11.667-11.667S20.443 2.334 14 2.334 2.333 7.557 2.333 14c0 6.444 5.224 11.667 11.667 11.667Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.333 16.334s1.75 2.333 4.667 2.333 4.667-2.334 4.667-2.334M10.5 10.5h.012M17.5 10.5h.012"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
