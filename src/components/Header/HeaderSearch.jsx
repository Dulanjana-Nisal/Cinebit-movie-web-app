import imageNotFound from "../../assets/images/image-notfound.webp";

function HeaderSearch({ searchValue,getSearchValue,SearchcloseBtn,searchResult,loeading }) {
    return (
        <div className="search">
            <div className="search-head">
                <div className="search-input">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="Search Movie and Tv Shows..." value={searchValue} onChange={getSearchValue} />
                </div>
                <button id="close-btn" onClick={SearchcloseBtn}>✕</button>
            </div>
            {
                searchValue === "" ?
                    <p id='empty-input'>Start type to search...</p>
                    :
                    searchResult.length > 0 ?
                        <div className="search-body">
                            {
                                loeading ? <p id='empty-input'>Searching...</p> :
                                    (searchResult).slice(0, 20).map((result) => {
                                        return (
                                            result.media_type !== 'person' &&
                                            <a href={`/${result.media_type}/${result.id}`}>
                                                <div className="result-card" key={result.id}>
                                                    <div className="img">
                                                        {!result.poster_path ? <img src={imageNotFound} /> : <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />}

                                                    </div>
                                                    <div className="details">
                                                        <h3>{!result.title ? result.name : result.title}</h3>
                                                        <p>{result.release_date && `${(!result.release_date ? result.first_air_date : result.release_date).slice(0, 4)} •`}  {result.media_type === 'movie' ? 'Movie' : 'TV Show'}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    })}
                        </div>
                        :
                        <p id='not-found'>Not Found</p>
            }
        </div>
    )
}

export default HeaderSearch;
