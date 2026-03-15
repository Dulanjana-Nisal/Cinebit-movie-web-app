import { Link } from "react-router";
import imageNotFound from "../../assets/images/image-notfound.webp";
import './MovieCard.css'

function MovieCard({ fetchData, type, loading, limit, localstorageData,setLocalstorageData }) {

    //add watchlist movie and tv shows    
    function addWatchlist(id,type) {
        const fetchDataFrom = async () => {
            const responce = fetchData.find((dataId) => {return dataId.id === id})
            const addData = [
                ...localstorageData,
                {
                    'id':  responce.id,
                    'title': responce.title,
                    'name': responce.name,
                    'poster_path': responce.poster_path,
                    'vote_average': responce.vote_average,
                    'type': type,
                }]

            localStorage.setItem('watchlist', JSON.stringify(addData))
            setLocalstorageData(addData)
        }
        fetchDataFrom();
        
    }

    //Remove watchlist movie and tv shows
    function removeWatchlist(id) {
        const updateWatchlist = localstorageData.filter((item) => { return item.id !== id })
        localStorage.setItem('watchlist', JSON.stringify(updateWatchlist))
        setLocalstorageData(updateWatchlist)
    }

    //limits cards
    const limitCard = limit ? fetchData.slice(0,limit) : fetchData

    return (
        <div className="section-body">
            {
                loading ?
                    <div className='loading-page'>
                        <p>Loading...</p>
                    </div> :

                    limitCard.map((data) => {

                        let alredyList = localstorageData && localstorageData.find((ids) => {return ids.id === data.id})

                        return (
                            <div className="movie-card" key={data.id}>
                                    <div className="card-head">
                                        <Link to={`/${type ? type : data.media_type}/${data.id}`}>
                                            {!data.poster_path ? <img src={imageNotFound} /> : <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />}
                                        </Link>
                                        {(type ? type : data.media_type) === "movie" ? <div className="tag-movie"><p>Movie</p></div> : <div className="tag-tv"><p>TV</p></div>}
                                        <div className="card-functions">
                                            <div className={alredyList ? 'fav fav-add' : 'fav'} onClick={()=>{!alredyList ? addWatchlist(data.id, (type ? type : data.media_type)) : removeWatchlist(data.id) }}>
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                            </div>
                                            <Link to={`/${type ? type : data.media_type}/${data.id}`}>
                                                <div className="play">
                                                    <svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to={`/${type ? type : data.media_type}/${data.id}`}>
                                        <div className="card-body">
                                            <div className="title">
                                                <p>{!data.title ? data.name : data.title}</p>
                                            </div>
                                            <div className="data">
                                                <div className="ratings"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {Number(data.vote_average).toFixed(1)}</div>
                                                <div className="year"> {(data.release_date || data.first_air_date) && (!data.release_date ? data.first_air_date : data.release_date).slice(0, 4)}</div>
                                            </div>
                                        </div>
                                    </Link>
                            </div>
                        )
                    })}
        </div>
    )
}

export default MovieCard;
