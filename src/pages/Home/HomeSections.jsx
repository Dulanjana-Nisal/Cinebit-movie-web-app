import { Link } from "react-router";
import MovieCard from "../../components/MovieCards/MovieCard";

function HomeSections({ loading,trendingData, hotTodayData, popularMoviesData, popularTvsData, nowPlayingMovies, upcomingMovies, onAirTvsData, topRatedMovies, actiondMovies, horrorMovies, siFiMovies, animationMovies,localstorageData,setLocalstorageData }) {

    return (
        <>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="trending-svg" width="22" height="22" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" stroke-width="2"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        <p>Trending <span className="trending-span">This Week</span></p>
                    </div>
                    <div className="head-right">
                        <Link to='/trending'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={trendingData}
                    limit={6}
                    loading={loading}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="hot-svg" width="22" height="22" fill="none" stroke="#fb923c" viewBox="0 0 24 24" stroke-width="2"><path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                        <p><span className="hot-span">Hot</span> Today</p>
                    </div>
                    <div className="head-right">
                        <Link to='/trending'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={hotTodayData}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="popular-svg" width="22" height="22" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"></rect><path d="M7 2v20M17 2v20M2 7h5M2 12h20M2 17h5M17 7h5M17 17h5"></path></svg>
                        <p>Popular <span className="popular-span">Movies</span></p>
                    </div>
                    <div className="head-right">
                        <Link to='/movies'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={popularMoviesData}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="popular-tv-svg" width="22" height="22" fill="none" stroke="#60a5fa" viewBox="0 0 24 24" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                        <p>Popular <span className="popular-tv-span">Tv Shows</span></p>
                    </div>
                    <div className="head-right">
                        <Link to='/tv'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={popularTvsData}
                    type={'tv'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="theaters-svg" width="22" height="22" fill="none" stroke="#f472b6" viewBox="0 0 24 24" stroke-width="2"><path d="M4 8V4a2 2 0 012-2h2M4 16v4a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <p><span className="theaters-span">In Theaters</span> Now</p>
                    </div>
                    <div className="head-right">
                        <Link to='/movies?list=now_playing'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={nowPlayingMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="coming-soon-svg" width="22" height="22" fill="none" stroke="#4ade80" viewBox="0 0 24 24" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
                        <p><span className="coming-soon-span">Coming</span> Soon</p>
                    </div>
                    <div className="head-right">
                        <Link to='/movies?list=upcoming'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={upcomingMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="on-air-svg" width="22" height="22" fill="none" stroke="#f87171" viewBox="0 0 24 24" stroke-width="2"><path d="M5.636 18.364a9 9 0 010-12.728M18.364 5.636a9 9 0 010 12.728M8.464 15.536a5 5 0 010-7.072M15.536 8.464a5 5 0 010 7.072"></path><circle cx="12" cy="12" r="1"></circle></svg>
                        <p><span className="on-air-span">On Air</span> Now</p>
                    </div>
                    <div className="head-right">
                        <Link to='/tv'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={onAirTvsData}
                    type={'tv'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="top-rated-svg" width="22" height="22" fill="#facc15" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p>Top <span className="top-rated-span">Rated</span></p>
                    </div>
                    <div className="head-right">
                        <Link to='/movies?list=top_rated'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={topRatedMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="action-svg" width="22" height="22" fill="none" stroke="#f87171" viewBox="0 0 24 24" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <p><span className="action-span">Action</span> Movies</p>
                    </div>
                    <div className="head-right">
                        <Link to='/genres/Action?type=movie'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={actiondMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="horror-svg" width="22" height="22" fill="none" stroke="#c084fc" viewBox="0 0 24 24" stroke-width="2"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v4M12 16h.01"></path></svg>
                        <p><span className="horror-span">Horror</span> Movies</p>
                    </div>
                    <div className="head-right">
                        <Link to='/genres/Horror?type=movie'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={horrorMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="sci-fi-svg" width="22" height="22" fill="none" stroke="#22d3ee" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path><path d="M2 12h20"></path></svg>
                        <p><span className="sci-fi-span">Sci-Fi</span> Movies</p>
                    </div>
                    <div className="head-right">
                        <Link to='/genres/Science%20Fiction?type=movie'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={siFiMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
            <div className="section">
                <div className="section-head-home">
                    <div className="head-left">
                        <svg className="animation-svg" width="22" height="22" fill="none" stroke="#fbbf24" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                        <p><span className="animation-span">Animation</span></p>
                    </div>
                    <div className="head-right">
                        <Link to='/genres/Animation?type=movie'>
                            <button>View All <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    </div>
                </div>
                <MovieCard
                    fetchData={animationMovies}
                    type={'movie'}
                    limit={6}
                    localstorageData={localstorageData}
                    setLocalstorageData={setLocalstorageData}
                />
            </div>
        </>
    )
}

export default HomeSections;