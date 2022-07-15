import * as React from 'react';
import { personStyle } from '../styles/styles'

export type PersonProps = {
    name: string, 
    age : number, 
    nation : string
}

export function Person (props: PersonProps) {
  return (
    <div>
      <ul style={personStyle.ul}>
          <li>name : {props.name}</li> 
          <li>age : {props.age}</li>
          <li>nation : {props.nation}</li>
      </ul>
    </div>
  );
}
