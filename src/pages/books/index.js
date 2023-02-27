import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Books.module.css';

const Books = ({ users }) => {
    return ( 
    <>
        <Head>
            <title>Nextjs books app | Home</title>
        </Head>
        <div>
            <h1>Books List</h1>
            <Link href='/books/sub1'>To sub1</Link><br/>
            {users.map( u => (
                <Link href={`/books/${u.id}`}  key={u.id} className={styles.single}>
                    <h3>{u.name}</h3>
                </Link>
            ))}
        </div>
    </>
     );
};

export default Books;


/************************************************************************************************
    Using Static Generation (getStaticProps()) 
1) getStaticProps() async function runs brfore this component is rendered，实现pre-rendering;
2) Inside this function, you can fetch external data and send it as props to this page    
3) getStaticProps can only be exported from a page. You can’t export it from non-page files
************************************************************************************************/
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data,
        }
    }
}