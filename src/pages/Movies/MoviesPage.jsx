import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './MoviesPage.css'
import Footer from '../../components/Footer/Footer';
import { useSearchParams } from 'react-router';
import MoviesHead from './MoviesHead';
import MovieFooter from './MovieFooter';
import MovieCard from '../../components/MovieCards/MovieCard'


function MoviesPage({ localstorageData, setLocalstorageData }) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    //Represent page numbers
    const [searchParems, setSearchParems] = useSearchParams();

    //loading
    const [loading, setLoading] = useState(false)

    //pages switch parems
    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //List movies parems
    const listParem = searchParems.get("list");

    //movies section
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const fetchMoviesData = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}movie/popular?${apiKey}&page=${page}`);
            setMoviesData(responce.data.results);

            setLoading(false)
        }
        listParem === 'null' | !listParem && fetchMoviesData();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems]);

    useEffect(() => {
        const listMoviesData = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}movie/${listParem}?${apiKey}&page=${page}`);
            setMoviesData(responce.data.results);

            setLoading(false)
        }

        listMoviesData();         
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems,listParem])

    //Changing Title
    let title = 'Popular';

    if (!listParem) {
        title = 'Popular';
    }
    if (listParem === 'top_rated') {
        title = 'Top Rated';
    }
    if (listParem === 'now_palying') {
        title = 'Now Playing';
    }
    if (listParem === 'upcoming') {
        title = 'Upcoming';
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <MoviesHead
                        title={title}
                        page={page}
                        listParem={listParem}
                    />
                    <MovieCard
                        fetchData={moviesData}
                        type={'movie'}
                        loading={loading}
                        localstorageData={localstorageData}
                        setLocalstorageData={setLocalstorageData}
                    />
                    <MovieFooter
                        setSearchParems={setSearchParems}
                        listParem={listParem}
                        page={page}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MoviesPage;