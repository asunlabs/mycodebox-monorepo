import * as React from 'react';

export interface  DomRefProps {
}

export function DomRef (props:  DomRefProps) {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useEffect(()=>{
        inputRef.current?.focus()
    },[])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}
