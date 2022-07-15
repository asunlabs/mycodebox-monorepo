import * as React from 'react';

export type HeadingProps = {
    children : string
}

export function Heading (props: HeadingProps) {
  return (
      <h2>{props.children}</h2>
  );
}
