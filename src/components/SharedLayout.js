import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = ({ children }) => {
    return ( 
    <>
        <div className="content">
            <Navbar />
            { children }
        </div>
        <Footer />
    </>
    );
}
 
export default SharedLayout;