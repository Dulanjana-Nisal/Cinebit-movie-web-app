import { Link, useSearchParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import TrendingFooter from "./TrendingFooter";
import MovieCard from "../../components/MovieCards/MovieCard";

function TrendingPage({ localstorageData,setLocalstorageData}) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const [searchParems, setSearchParems] = useSearchParams();
    const [loading,setLoading] = useState(false)

    //pages switch parems
    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //use state for api
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => { 
            setLoading(true)

            const responce = await axios.get(`${baseURL}trending/all/week?${apiKey}&page=${page}`);
            setTrendingMovies(responce.data.results);

            setLoading(false)
        }
        fetchTrendingMovies();
        
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems])

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <div className="section-head">
                        <div className="head-left-movie">
                            <h1>Trending This Week</h1>
                            <p>{`Page ${page} of 500`}</p>
                        </div>
                    </div>
                    <MovieCard
                        fetchData={trendingMovies}
                        loading={loading}
                        localstorageData={localstorageData}
                        setLocalstorageData={setLocalstorageData}
                    />
                    <TrendingFooter 
                        setSearchParems={setSearchParems}
                        page={page}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TrendingPage;