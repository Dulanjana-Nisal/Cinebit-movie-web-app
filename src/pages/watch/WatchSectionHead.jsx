import { Link } from "react-router";

function WatchSectionHead({ type,detailsData }) {
    return (
        <div className="watch-head">
            <Link to='/'><p>Home</p></Link>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 5l7 7-7 7"></path></svg>
            <Link to={type === 'movie' ? '/movies' : '/tv'}><p>{type === 'movie' ? 'Movie' : 'TV Shows'}</p></Link>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 5l7 7-7 7"></path></svg>
            <p><span>{detailsData.title ? detailsData.title : detailsData.name}</span></p>
        </div>
    )
}

export default WatchSectionHead;