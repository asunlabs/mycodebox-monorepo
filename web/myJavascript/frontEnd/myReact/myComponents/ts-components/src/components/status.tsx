import * as React from 'react';

export type statusInfo = {
    status : 'loading' | 'success' | 'error'
}

export function Status (props: statusInfo) {
  return (
    <div>
      {props.status==='loading' && <p>Loading ...</p> }
      {props.status==='success' && <p>Fetch success!</p> }
      {props.status==='error' && <p>Error occured</p> }
    </div>
  );
}
