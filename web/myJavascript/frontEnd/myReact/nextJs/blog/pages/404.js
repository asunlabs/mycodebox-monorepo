import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react';


const NotFound = () => {
    const router = useRouter()

    useEffect(()=>{
        console.log("useEffect ran")
        setTimeout(()=>{
            // redirect user to homepage in 3 sec
            router.push('/')
        }, 3000)
    }, [ ])
    return ( 
        <div>
            not found page.
        <Link href={'/'}><a>Back to home</a></Link>
        </div>
     );
}
 
export default NotFound;