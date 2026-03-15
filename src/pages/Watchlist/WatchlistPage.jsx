import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './WatchlistPage.css'
import { useState, useEffect } from "react";
import { Link } from "react-router";
import imageNotFound from "../../assets/images/image-notfound.webp";

function WatchlistPage() {

    //loading
    const [loading, setLoading] = useState(false)

    //watchlist data
    const [localstorageData, setLocalstorageData] = useState(JSON.parse(localStorage.getItem('watchlist')) || [])

    useEffect(() => {
        const fetchWatchlistData = () => {
            setLoading(true)

            const data = localStorage.getItem("watchlist");
            setLocalstorageData(JSON.parse(data))

            setLoading(false)
        }

        fetchWatchlistData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    //clear watchlist
    function clearWatchlist() {
        localStorage.clear();
        window.location.reload();
    }

    //Remove watchlist movie and tv shows
    function removeWatchlist(id) {
        const updateWatchlist = localstorageData.filter((item) => { return item.id !== id })
        localStorage.setItem("watchlist", JSON.stringify(updateWatchlist))

        setLocalstorageData(updateWatchlist)
    }

    return (
        <>
            <Header />
            <div className="container watchlist">
                <div className="section movie-section">
                    <div className="section-head">
                        <div className="head-left-movie">
                            <h1> My Watchlist</h1>
                            <p>{localstorageData ? localstorageData.length : '0'} Items</p>
                        </div>
                        <div className="head-right-movie wathclist-head-right">
                            <button className="clear-btn" onClick={clearWatchlist}>Clear All</button>
                        </div>
                    </div>
                    <div className="section-body watchlist-body">
                        {
                            loading ?
                                <div className='loading-page'>
                                    <p>Loading...</p>
                                </div> :

                                localstorageData && localstorageData.length > 0 ? 
                                localstorageData.map((data) => {

                                    let alredyList = localstorageData.length > 0 && localstorageData.find((findData) => { return findData.id === data.id })

                                    return (
                                        <div className="movie-card" key={data.id}> 
                                            <div className="card-head">
                                                <Link to={`/${data.type}/${data.id}`}>
                                                    {!data.poster_path ? <img src={imageNotFound} /> : <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />}
                                                </Link>
                                                <div className={data.type === 'movie' ? "tag-movie" : "tag-tv"}><p>{data.type === 'movie' ? 'Movie' : 'TV'}</p></div>
                                                <div className="card-functions">
                                                    <dev className={alredyList ? 'fav fav-add' : 'fav'} onClick={() =>{removeWatchlist(data.id) }} >
                                                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                                    </dev>
                                                    <Link to={`/${data.type}/${data.id}`}>
                                                        <div className="play">
                                                            <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link to={`/${data.type}/${data}`}>
                                                <div className="card-body">
                                                    <div className="title">
                                                        <p>{data.title ? data.title : data.name}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                                :
                                <div className="empty-watchlist">
                                    <svg width="40" height="40" fill="none" stroke="#f87171" viewBox="0 0 24 24" stroke-width="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    <h1>Your Watchlist is Empty</h1>
                                    <p>Start adding movies and TV Shows you want to watch later</p>
                                    <Link to='/movies'><button>Browse Content</button></Link>
                                </div>
                                }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WatchlistPage;
