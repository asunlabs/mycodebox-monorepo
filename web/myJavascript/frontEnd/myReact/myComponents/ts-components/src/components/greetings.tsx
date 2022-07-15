// Declare prop types: use 'type' keyword for building an application

import { greetingStyle } from "../styles/styles"

// use 'inferface' for building a library
type GreetingProps = {
    name : string, 
    messageCount : number, 
    gender? : string // gender prop is optional 
}

export const Greetings = (props:GreetingProps) => {
    return (
        <div style={greetingStyle.bgColor}> 
            <h2>Hello {props.name}, wecome back</h2>
            <p>You have {props.messageCount} unread messages</p>
            <p>{props.gender}</p>
        </div> 
    )
}