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
const EuiIconAppCrossClusterReplication = ({
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
    <path d="M0 0v16h8.7l5.3-6V0H0zm2 2h10v7H7v5H2V2zm8.45 9L9 12.64V11h1.45zM18 16v16h8.7l5.3-6V16H18zm2 2h10v7h-5v5h-5V18zm8.45 9L27 28.64V27h1.45z" />
    <path
      d="M5 18H3c0 6.075 4.925 11 11 11h2v-2h-2a9 9 0 0 1-9-9zM18 3h-2v2h2a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11z"
      className="euiIcon__fillSecondary"
    />
  </svg>
);
export const icon = EuiIconAppCrossClusterReplication;
