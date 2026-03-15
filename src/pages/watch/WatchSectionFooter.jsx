import { Link } from "react-router";

function WatchSectionFooter({ detailsData,type,seasonId,episodeId,detilsDataEpisode,genres,id }) {
    return (
        <div className="watch-footer">
            <div className="details">
                <div className="details-head">
                    <div className="title">
                        <h1>{detailsData.title ? detailsData.title : detailsData.name} {type === 'tv' && <span>S{seasonId} E{episodeId}</span>}</h1>
                    </div>
                    <div className="data">
                        <p className="rating"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> {type === 'movie' ? Number(detailsData.vote_average).toFixed(1) : Number(detilsDataEpisode.vote_average).toFixed(1)}</p>
                        <p>{detailsData.release_date && (detailsData.release_date).slice(0, 4) || detilsDataEpisode.air_date && (detilsDataEpisode.air_date)}</p>
                    </div>
                </div>
                <div className="genres">
                    {genres.map((genre) => {
                        return (
                            <p key={genre.id}>{genre.name}</p>
                        )
                    })}
                </div>
                <div className="details-body">
                    <p>{type === 'tv' ? detilsDataEpisode.overview : detailsData.overview}</p>
                    <Link to={`/${type}/${id}`}>
                        <h2><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg> View Details</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WatchSectionFooter;