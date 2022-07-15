import * as React from 'react';
import { Greetings } from '../greetings'

export interface  CustomComponentProps {
}

// assume that you need a defined prop that is coming from library
// in that case, you can extract the prop like below
// React.ComponentType<typeof component_to_import>
// type React.ComponentProps<T extends keyof JSX.IntrinsicElements
export function CustomComponent (props:  React.ComponentProps<typeof Greetings>) {
  return (
    <div>
      {/* below props are coming from the Greetings component */}
      {props.gender}
      {props.messageCount}
      {props.name}
    </div>
  );
}
