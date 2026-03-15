import { useParams, useSearchParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowGenresHeadSection from "./ShowGenresHeadSection";
import MovieCard from "../../components/MovieCards/MovieCard";
import ShowGenresFooter from "./ShowGenresFooterSection";

function ShowGenres({ localstorageData,setLocalstorageData}) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const [searchParems, setSearchParems] = useSearchParams();
    const [genres,setGenres] = useState([])
    const [loading,setLoading] = useState(false)

    //pages switch parems
    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //get type
    let type = searchParems.get('type')

    //get genres data
    useEffect(() => {
        const fetchGenres = async () => {
            const responce = await axios.get(`${baseURL}genre/${type}/list?${apiKey}`);
            setGenres(responce.data.genres);
        }
        fetchGenres();
    }, []);

    
    //get genres name
    const {genre} = useParams()

    //find genre ID
    let  genreId = genres.find((genreData)=>{return genreData.name === genre})

    //use state for api
    const [movieByGenres, setMovieByGenres] = useState([]);

    useEffect(() => {
        const fetchMovieByGenres = async () => { 
            setLoading(true)

            const responce = await axios.get(`${baseURL}discover/${type}?${apiKey}&with_genres=${genreId.id}&page=${page}`);
            setMovieByGenres(responce.data.results);

            setLoading(false)
        }
        fetchMovieByGenres();
        
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems,genres])

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <ShowGenresHeadSection 
                        genre={genre}
                        type={type}
                        page={page}
                    />
                    <MovieCard
                        fetchData={movieByGenres}
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

export default ShowGenres;