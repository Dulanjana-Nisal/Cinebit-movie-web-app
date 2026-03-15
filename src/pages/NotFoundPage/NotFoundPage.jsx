import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './NotFoundPage.css'

function NotFoundPage(){
    return(
        <>
            <Header />
            <div className="notfound-container">
                <div className="details">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <Link to='/'><button>Home Page</button></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage;