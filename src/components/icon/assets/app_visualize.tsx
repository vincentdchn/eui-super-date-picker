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
const EuiIconAppVisualize = ({
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
    <path
      d="M32 32H4a4 4 0 0 1-4-4V0h2v28a2 2 0 0 0 2 2h28v2Z"
      className="euiIcon__fillSecondary"
    />
    <path d="M6 20h2v7H6zM16 12h2v15h-2zM26 17h2v10h-2z" />
    <path d="M27 6a3 3 0 0 0-2.08.84L20 4.36A2.2 2.2 0 0 0 20 4a3 3 0 0 0-6 0c.001.341.062.68.18 1l-5.6 4.46A3 3 0 0 0 7 9a3 3 0 1 0 3 3 2.93 2.93 0 0 0-.18-1l5.6-4.48A3 3 0 0 0 17 7a3 3 0 0 0 2.08-.84l5 2.48A2.2 2.2 0 0 0 24 9a3 3 0 1 0 3-3ZM7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);
export const icon = EuiIconAppVisualize;
