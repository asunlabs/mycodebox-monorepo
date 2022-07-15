import * as React from 'react';
import { personListStyle } from '../styles/styles';

export function PersonList() {
  return (
    <ul style={personListStyle.ul}>
      <li>Not Jake</li>
      <li>Elly</li>
      <li>Brian</li>
    </ul>
  );
}