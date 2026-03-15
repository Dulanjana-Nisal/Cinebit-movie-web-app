import { Link } from "react-router";

function WatchSectionBody({ type,streaming,serverName,id,seasonId,episodeId,getSeason,seasons,episodesData }) {
    return (
        <div className="watch-body">
            <div className={`body-stream ${type === 'movie' && 'body-stream-movie'}`}>
                <iframe src={streaming} width="100%" height="100%" frameborder="0" allowFullScreen></iframe>
            </div>
            <div className="body-servers">
                <div className="server-head">
                    <h2>Select Server <span>(⭐ = Recommended )</span></h2>
                </div>
                <div className="server-btns">
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=vidsrc` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=vidsrc`}>
                        <button id={serverName === 'vidsrc' | !serverName && 'selected'} >VIDSRC ⭐</button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=vidfast` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=vidfast`}>
                        <button id={serverName === 'vidfast' && 'selected'} >VIDFAST <span>(Faster)</span> ⭐</button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=vidrock` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=vidrock`}>
                        <button id={serverName === 'vidrock' && 'selected'}>VIDDROCK ⭐<span>( Donwload )</span></button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=multiembed` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=multiembed`}>
                        <button id={serverName === 'multiembed' && 'selected'} >MULTIEMBED</button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=2embed` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=2embed`}>
                        <button id={serverName === '2embed' && 'selected'}>2EMBED</button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=vidsrc2` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=vidsrc2`}>
                        <button id={serverName === 'vidsrc2' && 'selected'}>VIDSRC 2</button>
                    </Link>
                    <Link to={type === 'movie' ? `/watch/movie/${id}?server=smashy` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=smashy`}>
                        <button id={serverName === 'smashy' && 'selected'}>SMASHY <span>( Donwload )</span></button>
                    </Link>
                </div>
            </div>
            {type === 'tv' &&
                <div className="body-episodes">
                    <div className="select-season">
                        <p>Seasons</p>

                        <Link to={!serverName ? `/watch/tv/${id}/${seasonId}/${episodeId}` : `/watch/tv/${id}/${seasonId}/${episodeId}?server=${serverName}`}>
                            <select name="name" id="#" onChange={getSeason} defaultValue="s" >
                                {
                                    seasons.map((season) => {
                                        return (
                                            <option value={season.season_number} selected={season.season_number == seasonId ? true : false}>Season {season.season_number === 0 ? season.name : season.season_number}</option>
                                        )
                                    })
                                }
                            </select>
                        </Link>
                    </div>
                    <div className="select-episodes">
                        <div className="episode-head">
                            <p>Episodes</p>
                        </div>
                        <div className="episode-body">
                            {episodesData.map((episode) => {
                                return (
                                    <Link to={!serverName ? `/watch/tv/${id}/${seasonId}/${episode.episode_number}` : `/watch/tv/${id}/${seasonId}/${episode.episode_number}?server=${serverName}`}>
                                        <div className="btn" id={episode.episode_number == episodeId ? 'selected' : 'un-selected'} key={episode.id}>
                                            <span>{episode.episode_number}</span>
                                            <p>{episode.name}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default WatchSectionBody;