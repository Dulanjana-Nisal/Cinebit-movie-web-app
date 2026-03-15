import { Link } from "react-router";

function DetailsHero({ detailsData,type,genres,id,trailer }) {
    return (
        <div className="hero">
            <div className="background-img">
                <img src={`https://image.tmdb.org/t/p/original/${detailsData.backdrop_path}`} alt="" />
            </div>
            <div className="banner">
                <div className="tags">
                    {type === "movie" ? <div className="tag-type-movie"><p>Movie</p></div> : <div className="tag-type-tv"><p>TV</p></div>}
                    <div className="tag-rating">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p>{Number(detailsData.vote_average).toFixed(1)}</p>
                    </div>
                    <div className="tag-year">
                        <p>{detailsData.release_date && (detailsData.release_date) || detailsData.last_air_date && (detailsData.last_air_date).slice(0, 4)}</p>
                    </div>
                    <div className="tag-runtime">
                        {detailsData.runtime && <p>{detailsData.runtime} min</p> || detailsData.number_of_seasons && <p>Seasons {detailsData.number_of_seasons}</p>}
                    </div>
                </div>
                <div className="genres">
                    {genres.map((genre) => {
                        return (
                            <p key={genre.id}>{genre.name} ,</p>
                        )
                    })}
                </div>
                <div className="main">
                    <h1>{!detailsData.title ? detailsData.name : detailsData.title}</h1>
                    <p>{detailsData.overview}</p>
                </div>
                <div className="buttons">
                    <Link to={type === 'movie' ? `/watch/movie/${id}` : `/watch/tv/${id}/1/1`}>
                        <button className="watch-btn">
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> Watch Now
                        </button>
                    </Link>
                    {
                        type === 'movie' &&
                        <a href={`https://www.youtube.com/embed/${trailer && trailer['key']}?autoplay=1&vq=hd1080`} target="_blank">
                            <button className="info-btn">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Trailer
                            </button>
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailsHero;