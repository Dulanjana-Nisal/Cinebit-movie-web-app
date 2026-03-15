import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './LanguagePage.css'

function LanguagePage() {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const [languages, setLanguages] = useState([])

    //get movie genres data
    useEffect(() => {
        const fetchLanguages = async () => {
            const responce = await axios.get(`${baseURL}configuration/languages?${apiKey}`);
            setLanguages(responce.data);
        }

        fetchLanguages();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="section language-section">
                    <div className="section-head">
                        <div className="head-left-genres">
                            <h1>Browse by Languages</h1>
                            <p>Discover movies and TV shows by Your favorite Languages</p>
                        </div>
                    </div>
                    <div className="section-body-genres ">
                        <div className="genre-body">
                            <div className="genre-body-head">
                                <svg className="sci-fi-svg" width="22" height="22" fill="none" stroke="#22d3ee" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path><path d="M2 12h20"></path></svg>
                                <p>Languages</p>
                            </div>
                            <div className="genre-body-body">
                                {languages.map((language) => {
                                    return (
                                        <Link to={`/languages/${language.iso_639_1}?type=movie`} key={language.iso_639_1}>
                                            <div className="genre-card">
                                                <h3>{language.english_name}</h3>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LanguagePage;