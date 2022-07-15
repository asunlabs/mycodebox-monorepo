import * as React from 'react';
import { UserProps } from '../propContainer'


export function User ( { name, email, isLoggedIn }:  UserProps) {
  return (
    <div>
        {isLoggedIn && 
        <ul>
            <li>welcome back, {name}</li>
            <li>ID : {email}</li>
        </ul>}
        {!isLoggedIn && <p>Please login first.</p>}
    </div>
  );
}
