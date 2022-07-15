import * as React from 'react';

export type ButtonProps = {
    // Setting event props : React.(Event here).(Element here)
    handleClick : (event:React.MouseEvent<HTMLButtonElement>)=>void
}

export function Button (props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>Click this</button>
  );
}
