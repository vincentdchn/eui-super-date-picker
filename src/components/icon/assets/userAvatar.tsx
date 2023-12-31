/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconUserAvatar = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule="evenodd">
      <path d="M13.689 11.132c1.155 1.222 1.953 2.879 2.183 4.748a1.007 1.007 0 0 1-1 1.12H3.007a1.005 1.005 0 0 1-1-1.12c.23-1.87 1.028-3.526 2.183-4.748.247.228.505.442.782.633-1.038 1.069-1.765 2.55-1.972 4.237L14.872 16c-.204-1.686-.93-3.166-1.966-4.235a7.01 7.01 0 0 0 .783-.633ZM8.939 1c1.9 0 3 2 4.38 2.633a2.483 2.483 0 0 1-1.88.867c-.298 0-.579-.06-.844-.157A3.726 3.726 0 0 1 7.69 5.75c-1.395 0-3.75.25-3.245-1.903C5.94 3 6.952 1 8.94 1Z" />
      <path d="M8.94 2c2.205 0 4 1.794 4 4s-1.795 4-4 4c-2.207 0-4-1.794-4-4s1.793-4 4-4m0 9A5 5 0 1 0 8.937.999 5 5 0 0 0 8.94 11" />
    </g>
  </svg>
);
export const icon = EuiIconUserAvatar;
