import MovieCard from "../../components/MovieCards/MovieCard";

function WatchSimilar({ type,detailsData,similarData,localstorageData,setLocalstorageData }) {
    return (
        <div className="similar">
            <div className="section-head-similar">
                <div className="head-left-similar">
                    {
                        type === 'movie' ?
                            <div className="head-svg-movie">
                                <svg id="tv-svg" width="22" height="22" fill="none" stroke="#60a5fa" viewBox="0 0 24 24" stroke-width="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            :
                            <div className="head-svg-tv">
                                <svg width="22" height="22" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                    }
                    <div className="head-details">
                        <h1>Similar {type === 'movie' ? "Movies" : "Shows You'll Love"}</h1>
                        <p>{type === 'movie' ? "Explor more in the same genre" : `Because you're watching ${detailsData.name}`}</p>
                    </div>
                </div>
            </div>
            <MovieCard
                fetchData={similarData}
                type={type}
                limit={12}
                localstorageData={localstorageData}
                setLocalstorageData={setLocalstorageData}
            />
        </div>
    )
}

export default WatchSimilar;