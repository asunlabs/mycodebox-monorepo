// decide how many static html pages needed based on fetched data
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((item) => {
        return {
            // set route parameters for the data
            params : { id : item.id.toString()}
        }
    })

    return {
        paths, 
        fallback : false
    }
}

// paths delivered as props 
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return { 
        props : {
            ninja : data
        }
    }
}

// destructure the data as props
const Detail = ( {ninja} ) => {
    return ( 
        <div>
            {/* follow the fetch API standard */}
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}

export default Detail;