import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        // data fetching in Next js will be done in behind the scene 
        // and it will reflected to before component mounts. 
        props : { ninjas : data } 
    }
}

// data delivered as props
const NinjaList = ({ ninjas }) => {
    return ( 
        <div>
        <p>ninja list</p>
        {ninjas.map((item)=> {
            return (
            <Link href={`/ninjas/${item.id}`} key={Math.random()}>
                <div >
                    {item.name}
                </div>
            </Link>
            )
        })}
        </div>
     );
}
 
export default NinjaList;