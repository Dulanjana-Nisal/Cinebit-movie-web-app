import { Link } from "react-router";

function ShowLanguageHeader({ itemLanguage,page,languageName,type }) {
    return (
        <div className="section-head">
            <div className="head-left-movie">
                <h1>{itemLanguage && itemLanguage.english_name} {type === 'movie' ? 'Movies' : 'TV Shows'}</h1>
                <p>{`Page ${page} of 500`}</p>
            </div>
            <div className="head-right-movie">
                <Link to={`/languages/${languageName}?type=movie`}><button className={type === 'movie' ? 'selected' : 'un-selected'}>Movies</button></Link>
                <Link to={`/languages/${languageName}?type=tv`}><button className={type === 'tv' ? 'selected' : 'un-selected'}>TV Shows</button></Link>
            </div>
        </div>
    )
}

export default ShowLanguageHeader;