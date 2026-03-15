import { Link } from "react-router";

function HomeHero({ randomMovieData }) {
    return (
        <div className="hero">
            <div className="background-img">
                <img src={`https://image.tmdb.org/t/p/original/${randomMovieData.backdrop_path}`} alt="" />
            </div>
            <div className="banner">
                <div className="tags">
                    <div className={randomMovieData.media_type === 'movie' ? 'tag-type-movie' : 'tag-type-tv'}>
                        <p>{randomMovieData.media_type === 'movie' ? 'Movie' : 'TV Show'}</p>
                    </div>
                    <div className="tag-rating">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p>{Number(randomMovieData.vote_average).toFixed(1)}</p>
                    </div>
                    <div className="tag-year">
                        <p>{randomMovieData.release_date && (randomMovieData.release_date).slice(0, 4) || randomMovieData.first_air_date && (randomMovieData.first_air_date).slice(0, 4)}</p>
                    </div>
                </div>
                <div className="main">
                    <h1>{randomMovieData.title ? randomMovieData.title : randomMovieData.name}</h1>
                    <p>{randomMovieData.overview}</p>
                </div>
                <div className="buttons">
                    <Link to={randomMovieData.media_type === 'tv' ? `/watch/tv/${randomMovieData.id}/1/1` : `/watch/movie/${randomMovieData.id}`}>
                        <button className="watch-btn">
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> Watch Now
                        </button>
                    </Link>
                    <Link to={`/${randomMovieData.media_type === 'movie' ? 'movie' : 'tv'}/${randomMovieData.id}`}>
                        <button className="info-btn">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg> More Info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;