// custom 404 Page
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/'); //redirect to the Home page ater 3 seconds
            //router.go(-1); //go back to the previous page <-
            //router.go(1); //go forward to the next page ->
        }, 3000);
    }, [])

    return ( 
    <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>This page cannot be found :(</h2>
        <p>Go back to the <Link href='/'>Homepage</Link></p>
    </div>
     );
}
 
export default NotFound;