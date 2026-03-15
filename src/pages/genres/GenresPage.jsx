import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState,useEffect } from "react";
import './GenresPage.css';
import axios from "axios";
import { Link } from "react-router";

function GenresPage() {
    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const [movieGenres,setMovieGenres] = useState([])
    const [tvGenres,setTvGenres] = useState([])

    //get movie genres data
    useEffect(() => {
        const fetchMovieGenres = async () => {
            const responce = await axios.get(`${baseURL}genre/movie/list?${apiKey}`);
            setMovieGenres(responce.data.genres);
        }
        const fetchTvGenres = async () => {
            const responce = await axios.get(`${baseURL}genre/tv/list?${apiKey}`);
            setTvGenres(responce.data.genres);
        }
        fetchMovieGenres();
        fetchTvGenres();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="section genres-section">
                    <div className="section-head">
                        <div className="head-left-genres">
                            <h1>Browse by Genre</h1>
                            <p>Discover movies and TV shows by Your favorite genres</p>
                        </div>
                    </div>
                    <div className="section-body-genres ">
                        <div className="genre-body">
                            <div className="genre-body-head">
                                <svg className="movie-svg" width="18" height="18" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="2"></rect>
                                    <path d="M7 2v20M17 2v20M2 12h20"></path>
                                </svg>
                                <p>Movie Genres</p>
                            </div>
                            <div className="genre-body-body">
                                {movieGenres.map((genre)=>{
                                    return(
                                        <Link to={`/genres/${genre.name}?type=movie`} key={genre.id}>
                                            <div className="genre-card" key={genre.id}>
                                                <h3>{genre.name}</h3>
                                                <p>Movies</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="genre-body">
                            <div className="genre-body-head">
                                <svg className="tv-svg" width="18" height="18" fill="none" stroke="#60a5fa" viewBox="0 0 24 24" stroke-width="2">
                                    <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                                    <polyline points="17 2 12 7 7 2"></polyline>
                                </svg>
                                <p>TV Show Genres</p>
                            </div>
                            <div className="genre-body-body">
                                {tvGenres.map((genre)=>{
                                        return(
                                            <Link to={`/genres/${genre.name}?type=tv`} key={genre.id}>
                                                <div className="genre-card" key={genre.id}>
                                                    <h3>{genre.name}</h3>
                                                    <p>TV Shows</p>
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
export default GenresPage;