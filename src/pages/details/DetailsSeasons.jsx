import { Link } from "react-router";
import imageNotFound from "../../assets/images/image-notfound.webp";

function DetailsSeasons({ seasons,id }) {
    return (
        <div className="seasons seasons">
            <div className="section-head">
                <div className="head-left-movie">
                    <h1>Seasons</h1>
                </div>
            </div>
            <div className="section-body">
                {seasons.map((details) => {
                    return (
                        <div className="movie-card" key={details.id}>
                            <Link to={`/watch/tv/${id}/${details.season_number}/1`}>
                                <div className="card-head">
                                    {!details.poster_path ? <img src={imageNotFound} /> : <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />}
                                    <div className="card-functions">
                                        <div className="play"><svg width="26" height="26" fill="#fff" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="title">
                                        <p>Season {details.season_number === 0 ? details.name : details.season_number}</p>
                                    </div>
                                    <div className="data">
                                        <div className="year">{details.episode_count} Episodes</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DetailsSeasons;
