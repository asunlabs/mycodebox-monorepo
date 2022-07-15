import * as React from 'react';

export type InputProps = {
    placeholder : string
    handleChange: (event : React.ChangeEvent<HTMLInputElement>) => void 
}

export function Input(props: InputProps) {
  return (
    <input className='myInput' type="text" placeholder={props.placeholder} onChange={props.handleChange}/>
  );
}
