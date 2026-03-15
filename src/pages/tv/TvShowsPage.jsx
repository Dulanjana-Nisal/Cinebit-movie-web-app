import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './TvShowsPage.css'
import Footer from '../../components/Footer/Footer';
import { useSearchParams } from 'react-router';
import TvShowsHead from './TvShowsHead';
import TvShowsFooter from './TvShowsFooter';
import MovieCard from '../../components/MovieCards/MovieCard';

function TvShowsPage({ localstorageData, setLocalstorageData }) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    //loading
    const [loading, setLoading] = useState(false)

    //Represent page numbers
    const [searchParems, setSearchParems] = useSearchParams();

    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //List tv shows parems
    const listParem = searchParems.get("list");

    //Tv shows section
    const [tvsData, setTvsData] = useState([]);

    useEffect(() => {
        const fetchTvsData = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}tv/popular?${apiKey}&page=${page}`);
            setTvsData(responce.data.results);

            setLoading(false)
        }

        listParem === 'null' | !listParem && fetchTvsData();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems]);

    useEffect(() => {
        const listTvData = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}tv/${listParem}?${apiKey}&page=${page}`);
            setTvsData(responce.data.results);

            setLoading(false)
        }

        listTvData();
        
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems, listParem])

    //Changing Title
    let title = 'Popular';

    if (!listParem) {
        title = 'Popular';
    }
    if (listParem === 'top_rated') {
        title = 'Top Rated';
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="section tv-section">
                    <TvShowsHead
                        title={title}
                        page={page}
                        listParem={listParem}
                    />
                    <MovieCard
                        fetchData={tvsData}
                        type={'tv'}
                        loading={loading}
                        localstorageData={localstorageData}
                        setLocalstorageData={setLocalstorageData}
                    />
                    <TvShowsFooter
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

export default TvShowsPage;