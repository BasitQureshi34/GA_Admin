import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const Directions = (props) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.5858 7.4142L7.4142 18.5858C6.63316 19.3668 6.63316 20.6332 7.4142 21.4142L18.5858 32.5858C19.3668 33.3668 20.6332 33.3668 21.4142 32.5858L32.5858 21.4142C33.3668 20.6332 33.3668 19.3668 32.5858 18.5858L21.4142 7.4142C20.6332 6.63316 19.3668 6.63316 18.5858 7.4142Z"
      fill="#20A64B"
    />
    <Path
      d="M27.0081 18.2479L21.7517 12.9915V16.4957H16.4953C15.5316 16.4957 14.7432 17.2842 14.7432 18.2479V25.2564H18.2474V20H21.7517V23.5043L27.0081 18.2479Z"
      fill="#12151A"
    />
    <Circle cx={20} cy={20} r={19} stroke="#20A64B" strokeWidth={2} />
  </Svg>
);
export default Directions;