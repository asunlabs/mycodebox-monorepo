import * as React from 'react';

export function MutableRef () {
    const [timer, setTimer] = React.useState(0)
    const interValRef = React.useRef<number | null>(null)

    const stopTimer = () => {
        if (interValRef.current) clearInterval(interValRef.current)
    }
    React.useEffect(()=>{
        interValRef.current = window.setInterval(()=>{
            setTimer((timer)=> timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, []) // [] : If present, effect will only activate if the values in the list change.
  return (
    <div>
      hookTimer : {timer}
      <button onClick={()=>stopTimer()}>Stop Timer</button>
    </div>
  );
}
