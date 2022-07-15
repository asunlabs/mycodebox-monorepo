import * as React from 'react';

// Import prop type from another file rather than 
// writing it at one file when project gets complicated
import { PropsTipsProps } from './propContainer'

// Use destructuring in parameter rather than just 'props'. For example, 
// do this : ( { name, expirers } : PropsTipProps {} )
// not this : (props : PropsTipsProps) {}
export function PropsTips( { name, expires }:  PropsTipsProps) {
  return (
    <h3>{name}, {expires}</h3>
  );
}
