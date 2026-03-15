import { Link } from "react-router";
import { reloadPage } from "../../utils/buttons";

function HeaderFunctions({ searchActiveBtn,hambergerActivateBtn }) {
    return (
        <div className="functions">
            <ul>
                <li>
                    <a href="#" onClick={reloadPage}><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></a>
                </li>
                <li>
                    <a href="#" id="search-btn" onClick={searchActiveBtn}><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></a>
                </li>
                <li>
                    <Link to="/watchlist" className="heart"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></Link>
                </li>
                <li>
                    <a href="#" className="hamberger" id="hamberger-btn" onClick={hambergerActivateBtn}><svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderFunctions;