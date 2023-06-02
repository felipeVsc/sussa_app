import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SvgProfile = ({ color, ...props }: SvgProps & {color: string}) => (
  <Svg
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <Path
      d="M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25Zm-6.234-4.68A9.958 9.958 0 0 0 12.5 22.5c2.463 0 4.716-.89 6.459-2.365A8.723 8.723 0 0 0 12.7 17.5a8.727 8.727 0 0 0-6.434 2.82ZM4.52 18.525A11.218 11.218 0 0 1 12.7 15a11.216 11.216 0 0 1 7.953 3.293 10 10 0 1 0-16.133.233v-.001Zm7.98-4.775a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill={color}
      // fillOpacity={0.4}
    />
  </Svg>
);
