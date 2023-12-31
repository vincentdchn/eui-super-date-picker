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
const EuiIconTimeRefresh = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M12.809 8.807a4.5 4.5 0 0 1-5.572-5.75A5 5 0 0 0 3.04 9.31a.5.5 0 0 1-.966.259 6 6 0 0 1 5.672-7.553 4.5 4.5 0 1 1 6.117 6.313 6.002 6.002 0 0 1-7.803 5.409.5.5 0 1 1 .303-.954 5.001 5.001 0 0 0 6.445-3.979ZM11.859 5H13.5a.5.5 0 0 0 0-1H12V1.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h.36Z"
      clipRule="evenodd"
    />
    <path d="m3.757 15.848-.776-2.897a1.5 1.5 0 0 1 1.06-1.838l2.898-.776a.5.5 0 1 1 .259.966l-2.898.776a.5.5 0 0 0-.353.613l.776 2.898a.5.5 0 0 1-.966.258Z" />
  </svg>
);
export const icon = EuiIconTimeRefresh;
