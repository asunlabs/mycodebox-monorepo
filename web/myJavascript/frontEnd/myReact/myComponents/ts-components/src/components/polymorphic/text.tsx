import * as React from 'react';

export type TextOwnProps<E extends React.ElementType> = {
    size? : 'sm' | 'md' | 'lg'
    color? : 'primary' | 'secondary'
    children : React.ReactNode
    as? : E // for dynamic html element selection
}

// create one more type to accept html props in label
// React.ComponentProps is a generic, thus it needs to be specified
type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, 
keyof TextOwnProps<E>> // Omit keys of TextOwnProps(size, color, children, as) to prevent name collision

export function Text <E extends React.ElementType = 'div'>( { size, color, children, as }:  TextProps<E>) {
    const Component = as || 'div'
  return (
    // below component can be h1, header, footer, div, p, ... 
    <Component className={`class-with-${size}-${color}`}>
    {children}
    </Component>
  );
}
