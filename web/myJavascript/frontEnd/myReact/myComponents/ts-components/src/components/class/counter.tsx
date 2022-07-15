import * as React from 'react';

// props and state
type CounterProps = {
    message : string
}

type CounterState = { 
    count : number
}

export class ClassCounter extends React.Component<CounterProps, CounterState> {
    
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prev)=>({count : prev.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}