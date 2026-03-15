import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import './DetailsPage.css'
import { useParams } from "react-router";
import DetailsHero from "./DetailsHero";
import MovieCard from "../../components/MovieCards/MovieCard";
import DetailsSeasons from "./DetailsSeasons";
import DetailsCasting from "./DetailsCasting";

function DetailsPage({ localstorageData, setLocalstorageData }) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";


    //get parems data from url
    const { id,type } = useParams();

    const [detailsData, setDetailsData] = useState([]);
    const [peopleData, setPeopleData] = useState([]);
    const [seasons,setSeasons] = useState([])
    const [genres,setGenres] = useState([])
    const [videoTrailer,setVideoTrailer] = useState([])
    const [recommendations,setRecommendations] = useState([])
    const [loading,setLoading] = useState(false)

    //fetch movie or tv data
    useEffect(() => {
        const fetchMovieDetailsData = async () => {
            const responce = await axios.get(`${baseURL}movie/${id}?${apiKey}`);
            setDetailsData(responce.data);
            setGenres(responce.data.genres);
        }

        const fetchTvDetailsData = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}?${apiKey}`);
            setDetailsData(responce.data);
            setGenres(responce.data.genres);
            setSeasons(responce.data.seasons);
        }
        type === 'movie' ? fetchMovieDetailsData() : fetchTvDetailsData();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id, type]);

    //fetch Pepols data
    useEffect(() => {
        const fetchMovieDetailsPeopleData = async () => {
            const responce = await axios.get(`${baseURL}movie/${id}/credits?${apiKey}`);
            setPeopleData(responce.data.cast);
        }

        const fetchTvDetailsPeopleData = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}/credits?${apiKey}`);
            setPeopleData(responce.data.cast);
        }

        type === 'movie' ? fetchMovieDetailsPeopleData() : fetchTvDetailsPeopleData();

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id, type]);

    //fetch video Trailer
    useEffect(() => {
        const fetchVideoMovieTrailer = async () => {
            const responce = await axios.get(`${baseURL}movie/${id}/videos?${apiKey}`);
            setVideoTrailer(responce.data.results);
        }
        const fetchVideoTvTrailer = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}/videos?${apiKey}`);
            setVideoTrailer(responce.data.results);
        }
        type === 'movie' ? fetchVideoMovieTrailer() : fetchVideoTvTrailer();
    }, []);

    //Get Recommendations
    useEffect(() => {
        const fetchMovieRecommendations = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}movie/${id}/recommendations?${apiKey}`);
            setRecommendations(responce.data.results);

            setLoading(false)
        }
        const fetchTvRecommendations = async () => {
            setLoading(true)
            
            const responce = await axios.get(`${baseURL}tv/${id}/recommendations?${apiKey}`);
            setRecommendations(responce.data.results);
            
            setLoading(false)
        }
        type === 'movie' ? fetchMovieRecommendations() : fetchTvRecommendations();
    }, [id]);

    const trailer = videoTrailer.find((trail) => { return trail.type === "Trailer"})

    return (
        <>
            <Header />
            <div className="container">
                <DetailsHero
                    detailsData={detailsData}
                    type={type}
                    genres={genres}
                    id={id}
                    trailer={trailer}
                />
                <div className="section details-section">
                    {
                        type === 'tv' && 
                        <DetailsSeasons
                            seasons={seasons}
                            id={id}
                        />
                    }
                    {
                        peopleData | peopleData.length > 0 &&
                        <DetailsCasting 
                            peopleData={peopleData}
                        />
                    }
                    <div className="recommendations">
                        <div className="section-head">
                            <div className="head-left-movie">
                                <h1>Recommendations</h1>
                            </div>
                        </div>
                        <MovieCard 
                            fetchData={recommendations}
                            type={type}
                            loading={loading}
                            limit={6}
                            localstorageData={localstorageData}
                            setLocalstorageData={setLocalstorageData}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailsPage;