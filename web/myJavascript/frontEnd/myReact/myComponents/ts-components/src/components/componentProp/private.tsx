import { PleaseLogin } from "./login"
import { ProfileProps } from './profile'

type PrivateProps = {
    isLoggedIn : boolean
    component : React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    return (
        <div>
            {isLoggedIn===true ? <Component name="jake" /> : <PleaseLogin /> }
        </div>
    )
}