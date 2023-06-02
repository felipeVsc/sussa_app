import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SvgHome = ({ color, ...props }: SvgProps & {color: string}) => (
  <Svg
    viewBox="0 0 22 23"
    fill="none"
    {...props}
  >
    <Path
      d="M12.222 23V10.222H22V23h-9.778ZM0 12.778V0h9.778v12.778H0Zm7.333-2.556V2.556H2.444v7.666h4.89ZM0 23v-7.667h9.778V23H0Zm2.444-2.556h4.89V17.89h-4.89v2.555Zm12.223 0h4.889v-7.666h-4.89v7.666ZM12.222 0H22v7.667h-9.778V0Zm2.445 2.556V5.11h4.889V2.556h-4.89Z"
      fill={color}
    />
  </Svg>
);
