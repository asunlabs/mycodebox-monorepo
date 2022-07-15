export type ProfileProps = { 
    name : string
}

export const Profile = ( {name} : ProfileProps ) => {
    return <div>private profile component name is {name}</div>
}