import { useEffect, useState } from "react";
import axios from "axios";
import './HomePage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HomeHero from "./HomeHero";
import HomeSections from "./HomeSections";

function HomePage( {localstorageData,setLocalstorageData} ) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    //loading
    const [loading, setLoading] = useState(false)

    //Random movies for banner
    const [randomMovieData, setRandomMovieData] = useState([])
    
    // eslint-disable-next-line react-hooks/purity
    const randomId = Math.floor(Math.random() * 10);

    //Trending Section  
    const [trendingData, setTrendingData] = useState([]);

    //hot today section
    const [hotTodayData, setHotTodayData] = useState([]);

    //popular movies section
    const [popularMoviesData, setPopularMoviesData] = useState([]);

    //popular TV Show section
    const [popularTvsData, setPopularTvsData] = useState([]);

    //Now Playing Movies section
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    //upComing Movies section
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    //on air TV Show section
    const [onAirTvsData, setOnAirTvsData] = useState([]);

    //top rated Movies section
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    //Action Movies section
    const [actiondMovies, setActionMovies] = useState([]);
    //Horror Movies section
    const [horrorMovies, setHorrorMovies] = useState([]);

    //si-fi Movies section
    const [siFiMovies, setSiFiMovies] = useState([]);

    //Animation Movies section
    const [animationMovies, setAnimationMovies] = useState([]);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)

            const[trending,hot,popularMove,popularTv,nowPlaying,upcoming,onTheAir,topRated,action,horror,sifi,animation] = await Promise.all([
                axios.get(`${baseURL}trending/all/week?${apiKey}`),
                axios.get(`${baseURL}trending/all/day?${apiKey}`),
                axios.get(`${baseURL}movie/popular?${apiKey}`),
                axios.get(`${baseURL}tv/popular?${apiKey}`),
                axios.get(`${baseURL}movie/now_playing?${apiKey}`),
                axios.get(`${baseURL}movie/upcoming?${apiKey}`),
                axios.get(`${baseURL}tv/on_the_air?${apiKey}`),
                axios.get(`${baseURL}movie/top_rated?${apiKey}`),
                axios.get(`${baseURL}discover/movie?${apiKey}&with_genres=28`),
                axios.get(`${baseURL}discover/movie?${apiKey}&with_genres=27`),
                axios.get(`${baseURL}discover/movie?${apiKey}&with_genres=878`),
                axios.get(`${baseURL}discover/movie?${apiKey}&with_genres=16`),
            ])
            setTrendingData(trending.data.results);
            setHotTodayData(hot.data.results);
            setRandomMovieData(hot.data.results[randomId])
            setPopularMoviesData(popularMove.data.results);
            setPopularTvsData(popularTv.data.results);
            setNowPlayingMovies(nowPlaying.data.results);
            setUpcomingMovies(upcoming.data.results);
            setOnAirTvsData(onTheAir.data.results);
            setTopRatedMovies(topRated.data.results);
            setActionMovies(action.data.results);
            setHorrorMovies(horror.data.results);
            setSiFiMovies(sifi.data.results);
            setAnimationMovies(animation.data.results);

            setLoading(false)
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <HomeHero
                    randomMovieData={randomMovieData}
                />
                <HomeSections
                    loading={loading}
                    trendingData={trendingData}
                    hotTodayData={hotTodayData}
                    popularMoviesData={popularMoviesData}
                    popularTvsData={popularTvsData}
                    nowPlayingMovies={nowPlayingMovies}
                    upcomingMovies={upcomingMovies}
                    onAirTvsData={onAirTvsData}
                    topRatedMovies={topRatedMovies}
                    actiondMovies={actiondMovies}
                    horrorMovies={horrorMovies}
                    siFiMovies={siFiMovies}
                    animationMovies={animationMovies}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <Footer />
        </>
    )
}

export default HomePage;