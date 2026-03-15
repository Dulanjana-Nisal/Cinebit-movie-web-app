import { Link } from "react-router";

function MoviesHead({ title,page,listParem }) {
    return (
        <div className="section-head">
            <div className="head-left-movie">
                <h1>{title} Movies</h1>
                <p>{`Page ${page} of 500`}</p>
            </div>
            <div className="head-right-movie">
                <Link to="/movies"><button className={listParem === 'null' || !listParem ? 'selected' : 'un-selected'}>Popular</button></Link>
                <Link to="/movies?list=top_rated"><button className={listParem === 'top_rated' ? 'selected' : 'un-selected'}>Top Rated</button></Link>
                <Link to="/movies?list=now_playing"><button className={listParem === 'now_playing' ? 'selected' : 'un-selected'}>Now Playing</button></Link>
                <Link to="/movies?list=upcoming"><button className={listParem === 'upcoming' ? 'selected' : 'un-selected'}>Upcoming</button></Link>
            </div>
        </div>
    )
}

export default MoviesHead;