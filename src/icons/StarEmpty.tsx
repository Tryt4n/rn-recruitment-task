import React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {IconProps} from './types';

export default function StarEmptyIcon({color, size}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.65336 2.33265C7.68156 2.26387 7.72958 2.20503 7.79131 2.16362C7.85304 2.12221 7.92569 2.1001 8.00003 2.1001C8.07436 2.1001 8.14702 2.12221 8.20875 2.16362C8.27048 2.20503 8.3185 2.26387 8.3467 2.33265L9.76336 5.73998C9.78988 5.80374 9.83347 5.85894 9.88934 5.89952C9.94521 5.9401 10.0112 5.96448 10.08 5.96998L13.7587 6.26465C14.0914 6.29131 14.226 6.70665 13.9727 6.92331L11.17 9.32465C11.1177 9.36944 11.0786 9.42778 11.0572 9.49328C11.0358 9.55878 11.0329 9.62891 11.0487 9.69598L11.9054 13.286C11.9226 13.358 11.9181 13.4335 11.8924 13.503C11.8667 13.5724 11.821 13.6327 11.7611 13.6763C11.7012 13.7198 11.6297 13.7445 11.5557 13.7475C11.4817 13.7504 11.4085 13.7313 11.3454 13.6926L8.19536 11.7693C8.13654 11.7334 8.06895 11.7144 8.00003 11.7144C7.9311 11.7144 7.86351 11.7334 7.80469 11.7693L4.65469 13.6933C4.59153 13.732 4.51833 13.7511 4.44433 13.7481C4.37034 13.7452 4.29886 13.7204 4.23894 13.6769C4.17902 13.6334 4.13334 13.5731 4.10766 13.5036C4.08199 13.4342 4.07748 13.3587 4.09469 13.2866L4.95136 9.69598C4.96725 9.62891 4.96433 9.55876 4.94292 9.49325C4.92151 9.42773 4.88245 9.36939 4.83003 9.32465L2.02736 6.92331C1.97092 6.8752 1.93003 6.81143 1.90987 6.74006C1.8897 6.66869 1.89117 6.59295 1.91409 6.52241C1.937 6.45188 1.98033 6.38974 2.0386 6.34385C2.09686 6.29796 2.16742 6.2704 2.24136 6.26465L5.92003 5.96998C5.98886 5.96448 6.05484 5.9401 6.11071 5.89952C6.16658 5.85894 6.21018 5.80374 6.23669 5.73998L7.65336 2.33265Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}