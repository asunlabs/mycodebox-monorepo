import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja list</h1>
            </div>
            <Link href={"/"}><a>Home</a></Link> <br/>
            <Link href={"/about"}><a>About</a></Link> <br/>
            <Link href={"/ninjas/list"}><a>Ninja Listing</a></Link> <br/>
        </nav>
     );
}
 
export default Navbar;