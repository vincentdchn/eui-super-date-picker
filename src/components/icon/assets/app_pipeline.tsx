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
const EuiIconAppPipeline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M29 12a3 3 0 0 0-3 3h-4a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3H6a3 3 0 0 0-3-3H0v14h3a3 3 0 0 0 3-3h4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3h4a3 3 0 0 0 3 3h3V12h-3ZM3 24H2V14h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1Zm17-3v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2H6v-4h6v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h6v4h-6Zm10 3h-1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1v10Z" />
    <path d="M22 6H10v2h5v2h2V8h5z" className="euiIcon__fillSecondary" />
  </svg>
);
export const icon = EuiIconAppPipeline;
