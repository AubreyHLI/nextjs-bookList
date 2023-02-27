import Head from "next/head";

/******************************************************************************
    First, we’ll create a page called [id].js under pages/posts. 
    Pages that begin with [ and end with ] are dynamic routes in Next.js. 
*****************************************************************************/
const Details = ({ userData }) => {
    return ( 
    <>
        <Head>
            <title>Nextjs books app | Books | {userData.name}</title>
        </Head>
        <div>
            <h1>{userData.name}</h1>
            <p>{userData.email}</p>
            <p>{userData.website}</p>
            <p>{userData.address.city}</p>
        </div>
    </>
    );
}
 
export default Details;


// getStaticPaths() used for fetch data for all dynamic route pages
// Use `getStaticPaths` to fetch an array of product IDs and use `getStaticProps` to fetch data for each product.
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const userPaths = data.map(u => {
        return {
            params: {
                id: u.id.toString()
            }
        }
    })

    return {
        paths: userPaths,
        fallback: false
    }
}


// gerStaticProps receive the params return by getStaticPaths() to pre-render each dynamic route page
export const getStaticProps = async ({params}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id);
    const data = await res.json();

    return {
        props: { userData: data }
    }
}