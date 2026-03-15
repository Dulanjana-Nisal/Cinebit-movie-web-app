import { Link } from "react-router";

function YearSectionHead({ type,year,page }) {
    
    return (
        <div className="section-head">
            <div className="head-left-movie">
                <h1>{`${type === 'movie' ? 'Movies' : 'TV Shows'} From ${year}`}</h1>
                <p>{`Page ${page} of 500`}</p>
            </div>
            <div className="head-right-movie">
                <Link to={`/year/${year}?type=movie`}><button className={type === 'movie' ? 'selected' : 'un-selected'}>Movies</button></Link>
                <Link to={`/year/${year}?type=tv`}><button className={type === 'tv' ? 'selected' : 'un-selected'}>TV Shows</button></Link>
            </div>
        </div>
    )
}

export default YearSectionHead;