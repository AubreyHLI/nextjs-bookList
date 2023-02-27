import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src='/images/cat.PNG' alt='' width={128} height={128}/>
            </div>
            <Link href='/'>Home</Link><br/>
            <Link href='/about'>About</Link><br/>
            <Link href='/books'>Books</Link>
        </nav>
     );
}
 
export default Navbar;