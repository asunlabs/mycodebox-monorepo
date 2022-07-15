type RandomNumberProps_before = { 
    value : number
    isPositive : boolean
    isNegative : boolean
    isZero : boolean
}

// spliting above props so that if value is set to one of the types(positive or negative or zero)
// then others get disabled(not enabled for types)
type RandomNumber = { value : number }
type PositiveNumber = RandomNumber & { 
    isPositive : boolean
    isNegative? : never
    isZero? : never
}
type NegativeNumber = RandomNumber & { 
    isNegative : boolean
    isPositive? : never
    isZero? : never
}
type ZeroNumber = RandomNumber & { 
    isZero : boolean
    isNegative? : never
    isPositive? : never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber = ({value, isPositive, isNegative, isZero} : RandomNumberProps)=>{
    return (
        <div>
            {value} {isPositive && 'true'} {isNegative && 'negative'} {isZero && 'zero'}
        </div>
    )
}