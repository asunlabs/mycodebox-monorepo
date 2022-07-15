// React ver 16 : should import React to use React.ReactNode at each file 
// React ver 17 : dont have to import React at each file
type OscarProps = { 
    children : React.ReactNode // 
}

export function Oscar(props : OscarProps) {
    return <div>{props.children}</div>
}