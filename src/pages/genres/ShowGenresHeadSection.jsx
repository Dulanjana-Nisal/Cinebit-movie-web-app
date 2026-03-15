function ShowGenresHeadSection({ genre,type,page }) {
    return (
        <div className="section-head">
            <div className="head-left-movie">
                <h1>{`${genre} ${type === 'movie' ? 'Movies' : 'TV Shows'}`}</h1>
                <p>{`Page ${page} of 500`}</p>
            </div>
        </div>
    )
}

export default ShowGenresHeadSection;