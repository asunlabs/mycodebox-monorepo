// setting user-defined position type with union type
type Horizontals = 'left' | 'center' | 'right'
type Verticals = 'top' | 'center' | 'bottom'

// combine the two types to complete position props
type ElementPositionProps = {
    // Exclude in typescript : Exclude <include this, exclude that>
    position : Exclude<`${Horizontals}-${Verticals}`, 'center-center'> | 'center'
}

export const ElementPosition = ( {position }: ElementPositionProps) =>{
    return (
        <p>Element position is : {position}</p>
    )
}