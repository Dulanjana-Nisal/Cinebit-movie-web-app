import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import './WatchPage.css'
import { useParams, useNavigate, useSearchParams } from "react-router";
import WatchSectionHead from "./WatchSectionHead";
import WatchSectionBody from "./WatchSectionBody";
import WatchSectionFooter from "./WatchSectionFooter";
import WatchSimilar from "./WatchSimilar";

function WatchPage({ localstorageData,setLocalstorageData}) {
    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    const { type, id, seasonId, episodeId } = useParams();
    const [serverParem] = useSearchParams()

    const serverName = serverParem.get('server')

    const [detailsData, setDetailsData] = useState([]);
    const [seasons, setSeasons] = useState([]);
    const [episodesData, setEpisodesData] = useState([]);
    const [getToSeasonId, setGetToSeasonId] = useState(seasonId);
    const [genres, setGenres] = useState([]);
    const [detilsDataEpisode, setDetailsDataEpisode] = useState([]);
    const [similarData, setSimilarData] = useState([]);

    const navigate = useNavigate();

    // get movie or tv data
    useEffect(() => {
        const fetchMovieDetailsData = async () => {
            const responce = await axios.get(`${baseURL}movie/${id}?${apiKey}`);
            setDetailsData(responce.data);
            setGenres(responce.data.genres);
        }

        const fetchTvDetailsData = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}?${apiKey}`);
            setDetailsData(responce.data);
            setSeasons(responce.data.seasons);
            setGenres(responce.data.genres);
        }
        const fetchDetailsDataEpisode = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}/season/${getToSeasonId}/episode/${episodeId}?${apiKey}`);
            setDetailsDataEpisode(responce.data);
        }

        type === 'movie' ? fetchMovieDetailsData() : fetchTvDetailsData();
        type === 'tv' && fetchDetailsDataEpisode();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id, type, serverParem, seasonId, episodeId]);

    // get episode data
    useEffect(() => {
        const fetchTvEpisodesData = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}/season/${getToSeasonId}?${apiKey}`);
            setEpisodesData(responce.data.episodes);
            navigate(!serverName ? `/watch/tv/${id}/${getToSeasonId}/${episodeId}` : `/watch/tv/${id}/${getToSeasonId}/${episodeId}?server=${serverName}`)
        }
        type === 'tv' && fetchTvEpisodesData()

    }, [id, type, getToSeasonId])

    //get similar data
    useEffect(() => {
        const fetchMovieSimilarData = async () => {
            const responce = await axios.get(`${baseURL}movie/${id}/similar?${apiKey}`);
            setSimilarData(responce.data.results);
        }
        const fetchTvReSimilarData = async () => {
            const responce = await axios.get(`${baseURL}tv/${id}/recommendations?${apiKey}`)
            setSimilarData(responce.data.results);
        }

        type === 'movie' ? fetchMovieSimilarData() : fetchTvReSimilarData();
    }, [type]);

    function getSeason(event) {
        setGetToSeasonId(event.target.value)
    }

    let streaming = type === 'movie' ? `https://vidsrc.mov/embed/movie/${id}` : `https://vidsrc.mov/embed/tv/${id}/${seasonId}/${episodeId}`;


    if (serverParem.get('server') === 'vidfast') {
        streaming = type === 'movie' ? `https://vidfast.pro/movie/${id}?autoPlay=true` : `https://vidfast.pro/tv/${id}/${seasonId}/${episodeId}?autoPlay=true`;
    }
    if (serverParem.get('server') === 'vidsrc') {
        streaming = type === 'movie' ? `https://vidsrc.mov/embed/movie/${id}` : `https://vidsrc.mov/embed/tv/${id}/${seasonId}/${episodeId}`;
    }
    if (serverParem.get('server') === 'multiembed') {
        streaming = type === 'movie' ? ` https://multiembed.mov/?video_id=${id}&tmdb=1` : `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${seasonId}&e=${episodeId}`;
    }
    if (serverParem.get('server') === '2embed') {
        streaming = type === 'movie' ? `https://www.2embed.online/embed/movie/${id}` : `https://www.2embed.online/embed/tv/${id}/${seasonId}/${episodeId}`;
    }
    if (serverParem.get('server') === 'vidsrc2') {
        streaming = type === 'movie' ? `https://vidsrc.wtf/api/1/movie/?id=${id}` : `https://vidsrc.wtf/api/1/tv/?id=${id}&s=${seasonId}&e=${episodeId}`;
    }
    if (serverParem.get('server') === 'vidrock') {
        streaming = type === 'movie' ? `https://vidrock.net/movie/${id}` : `https://vidrock.net/tv/${id}/${seasonId}/${episodeId}`;
    }
    if (serverParem.get('server') === 'smashy') {
        streaming = type === 'movie' ? `https://player.smashy.stream/movie/${id}` : `https://player.smashy.stream/tv/${id}?s=${seasonId}&e=${episodeId}`;
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <div className="section-head watch">
                        <WatchSectionHead
                            type={type}
                            detailsData={detailsData}
                        />
                        <WatchSectionBody
                            type={type}
                            streaming={streaming}
                            serverName={serverName}
                            id={id}
                            seasonId={seasonId}
                            episodeId={episodeId}
                            getSeason={getSeason}
                            seasons={seasons}
                            episodesData={episodesData}
                        />
                        <WatchSectionFooter 
                            detailsData={detailsData}
                            type={type}
                            seasonId={seasonId}
                            episodeId={episodeId}
                            detilsDataEpisode={detilsDataEpisode}
                            genres={genres}
                            id={id}
                        />
                    </div>
                    {
                        (similarData).length > 0 &&
                        <WatchSimilar
                            type={type}
                            detailsData={detailsData}
                            similarData={similarData}
                            localstorageData={localstorageData}
                            setLocalstorageData={setLocalstorageData}
                        />
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WatchPage;