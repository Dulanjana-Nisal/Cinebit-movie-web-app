import { Link } from "react-router";

function TvShowsHead({ title,page,listParem }) {
    return (
        <div className="section-head">
            <div className="head-left-tv">
                <h1>{title} Tv Shows</h1>
                <p>{`Page ${page} of ${listParem === 'top_rated' ? '120' : '500'}`}</p>
            </div>
            <div className="head-right-tv">
                <Link to="/tv"><button className={!listParem || listParem === 'null' ? 'selected' : 'un-selected'}>Popular</button></Link>
                <Link to="/tv?list=top_rated"><button className={listParem === 'top_rated' ? 'selected' : 'un-selected'}>Top Rated</button></Link>
            </div>
        </div>
    )
}

export default TvShowsHead;