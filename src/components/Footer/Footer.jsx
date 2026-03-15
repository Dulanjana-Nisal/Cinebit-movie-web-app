import { Link } from 'react-router';
import logo from "../../assets/images/logo.svg";
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-border"></div>
            <div className="footer-body">
                <div className="links-card logo-card">
                    <div className="logo">
                        <a href='/'><img src={logo} alt="" /></a>
                        <a href='/'><p>Cinebit</p></a>
                    </div>
                    <div className="title">
                        <p>Stream Your favorit movies and TV Shows in HD quality. Free, fast, and always updated with the latest releases.</p>
                    </div>
                </div>
                <div className="links-card">
                    <h3>BROWSE</h3>
                    <ul>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/tv">TV Shows</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                        <li><Link to="/movies?list=top_rated">Top Rated</Link></li>
                    </ul>
                </div>
                <div className="links-card">
                    <h3>MOVIES</h3>
                    <ul>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/movies?list=now_playing">Now Playing</Link></li>
                        <li><Link to="/movies?list=upcoming">Upcoming</Link></li>
                        <li><Link to="/movies?list=top_rated">Top Rated</Link></li>
                    </ul>
                </div>
                <div className="links-card">
                    <h3>TV SHOWS</h3>
                    <ul>
                        <li><Link to="/tv">Popular</Link></li>
                        <li><Link to="/tv?list=top_rated">Top Rated</Link></li>
                        <li><a href="/year/2026?type=tv">Airing Today</a></li>
                        <li><a href="/year/2026?type=tv">New in 2026</a></li>
                    </ul>
                </div>
                <div className="links-card">
                    <h3>DISCOVER</h3>
                    <ul>
                        <li><Link to="/genres">Genres</Link></li>
                        <li><Link to="/year/2026?type=movie">New in 2026</Link></li>
                        <li><Link to="/year/2025?type=movie">2025 Releases</Link></li>
                        <li><Link to="/watchlist">My Watchlist</Link></li>
                    </ul>
                </div>
                <div className="links-card">
                    <h3>LANGUAGES</h3>
                    <ul>
                        <li><a href="/languages/en?type=movie">English</a></li>
                        <li><a href="/languages/es?type=movie">Spanish </a></li>
                        <li><a href="/languages/hi?type=movie">Hindi</a></li>
                        <li><a href="/languages/ja?type=movie">Japanese</a></li>
                    </ul>
                </div>
            </div>
            <div className="importent-msg">
                <div className="msg-head">
                    <svg width="20" height="20" fill="none" stroke="#facc15" viewBox="0 0 24 24" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <div className="msg-body">
                    <p>Cinebit dose not store any files on our server, we only linked to the media which is hosted on 3rd party services.</p>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Cinebit Designed & Developed by Dulanjana Nisal. All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer;
