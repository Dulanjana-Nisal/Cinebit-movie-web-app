import { useParams, useSearchParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCards/MovieCard";
import ShowLanguageHeader from "./ShowLanguageHeader";
import ShowGenresFooter from "../genres/ShowGenresFooterSection";

function ShowLanguage({ localstorageData, setLocalstorageData }) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const [searchParems, setSearchParems] = useSearchParams();
    const [languagesData, setLanguagesData] = useState([])
    const [languageName, setLanguageName] = useState()
    const [getLanguage, setLanguage] = useState()
    const [loading, setLoading] = useState(false)

    //pages switch parems
    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //get language name
    const { language } = useParams()
    
    //get type
    const type = searchParems.get('type') ? searchParems.get('type') : 'movie'


    //get language movies data
    useEffect(() => {
        const fetchGenres = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}discover/${type}?${apiKey}&with_original_language=${language}&page=${page}`);
            setLanguagesData(responce.data.results);
            setLanguageName(responce.data.results[0].original_language)

            setLoading(false)
        }
        fetchGenres();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems]);

    //get languages
    useEffect(() => {
        const fetchLanguage = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}configuration/languages?${apiKey}`);
            setLanguage(responce.data);

            setLoading(false)
        }
        languageName && fetchLanguage();
    }, [languagesData])

    //Find English name
    const itemLanguage = getLanguage && getLanguage.find(name => name.iso_639_1 === languageName)

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <ShowLanguageHeader 
                        itemLanguage={itemLanguage}
                        page={page}
                        languageName={languageName}
                        type={type}                    
                    />
                    <MovieCard
                        fetchData={languagesData}
                        type={type}
                        loading={loading}
                        localstorageData={localstorageData}
                        setLocalstorageData={setLocalstorageData}
                    />
                    <ShowGenresFooter 
                        setSearchParems={setSearchParems}
                        type={type}
                        page={page}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShowLanguage;