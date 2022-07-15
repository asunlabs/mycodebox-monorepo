import * as React from 'react';

// Use generic when parameter/variable varies. For example, 
// when you have to deal with 1) string[] 2) number[] 3) object[]
// <T> stands for 'type', conventional
export type ListProps<T extends {}> = {
    items :T[]
    onClick : (value: T) => void
}

// <T extends {}> : accpeting all types except null and undefined
export function List <T extends { }>( { items, onClick }:  ListProps<T>) {
  return (
    <div>
      <h2>item list</h2>
      {items.map((item, index) => {
          return (
              <div key={index} onClick={()=>onClick(item)}>
                  {/* {JSON.stringify(item)} <br />
                  {item.id} */}
                  {item}
              </div>
          )
      })}
    </div>
  );
}
