import * as React from 'react';

export type ContainerProps = {
    styles : React.CSSProperties
}

export function Container (props:  ContainerProps) {
  return (
    <div style={props.styles}>
        <h3>React provides CSSProperties types</h3>
    </div>
  );
}
