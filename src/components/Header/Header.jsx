import { useEffect,useState } from "react";
import axios from "axios";
import './Header.css'
import { Link, useLocation } from "react-router";
import HeaderPaths from './HeaderPaths'
import HeaderFunctions from "./HeaderFunctions";
import HeaderSearch from "./HeaderSearch";
import HeaderHamberger from "./HeaderHamberger";
import logo from "../../assets/images/logo.svg";

function Header() {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    //Search Funtion in header
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult] =useState([]);
    const [loeading,setLoading] = useState(false)

    const getSearchValue = (event)=>{
        setSearchValue(event.target.value);
    }

    useEffect(()=>{
        const getSearchValueData = async ()=>{
            setLoading(true)
            const responce = await axios.get(`${baseURL}search/multi?query=${searchValue}&include_adult=false&${apiKey}`);
            setSearchResult(responce.data.results)
            setLoading(false)
        }
        getSearchValueData();
    }, [searchValue]);

    //Search Button Activation
    const [searchBtnActivate,SetSearchBtnActivate] = useState(false);

    function searchActiveBtn(){
        SetSearchBtnActivate(true);
    }
    function SearchcloseBtn(){
        SetSearchBtnActivate(false);
    }

    //berger button activation
    const [hambergerBtn,setHambergerBtn] = useState(false);

    function hambergerActivateBtn(){
        return !hambergerBtn ? setHambergerBtn(true) : setHambergerBtn(false);
    }

    //get path details
    const location = useLocation();

    // Header background on scroll
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateHeaderBackground = () => {
            setIsScrolled(window.scrollY > 80);
        };

        updateHeaderBackground();
        window.addEventListener('scroll', updateHeaderBackground, { passive: true });
        return () => window.removeEventListener('scroll', updateHeaderBackground);
    }, []);

    return (
        <div className={`header${isScrolled ? ' scrolled' : ''}`}>
            <div className="nav-bar">
                <div className="logo">
                    <a href='/'><img src={logo} alt="" /></a>
                    <a href='/'><p>Cinebit</p></a>
                </div>
                <HeaderPaths
                    location={location}
                />
                <HeaderFunctions
                    searchActiveBtn={searchActiveBtn}
                    hambergerActivateBtn={hambergerActivateBtn}
                />
                {
                    searchBtnActivate &&
                    <div className="search-backgound" id="search-content">
                        <HeaderSearch
                            searchValue={searchValue}
                            getSearchValue={getSearchValue}
                            SearchcloseBtn={SearchcloseBtn}
                            searchResult={searchResult}
                            loeading={loeading}
                        />
                    </div>
                }
                {
                    hambergerBtn &&
                    <HeaderHamberger />
                }
            </div>
        </div>
    )
}

export default Header;
