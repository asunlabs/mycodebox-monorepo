import Footer from "./footer";
import Navbar from "./navbar";
import Image from 'next/image';

const Layout = ( {children} ) => {
    return ( 
        <div className="content" >
            <div style={{"backgroundColor" : "white"}}>
                <Image src={"/cat.png"} width={"100"} height={"100"}/>
            </div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
 
export default Layout;