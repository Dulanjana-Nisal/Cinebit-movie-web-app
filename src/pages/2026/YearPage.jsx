import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './YearPage.css';
import { useState,useEffect } from "react";
import { Link,useParams,useSearchParams } from "react-router";
import YearSectionHead from "./YearSectionHead";
import YearSectionFooter from "./YearSectionFooter";
import MovieCard from "../../components/MovieCards/MovieCard";
import YearSectionSelections from "./YearSectionSelections";

function YearsPage({ localstorageData,setLocalstorageData }) {

    const baseURL = "https://api.themoviedb.org/3/";
    const apiKey = "api_key=c5a0e90027a3182835d4703f43119fa4";

    //loading
    const [loading,setLoading] = useState(false)

    //set search parems
    const [searchParems, setSearchParems] = useSearchParams();

    //pages switch parems
    let page = Number(searchParems.get('page'));
    page == 0 ? page = 1 : page;

    //get type
    const type = searchParems.get("type");
    
    //year parem
    const {year} = useParams('year')
    
    //use state for api
    const [dataByYear, setDataByYear] = useState([]);
    

    useEffect(() => {
        const fetchDataByYear = async () => {
            setLoading(true)

            const responce = await axios.get(`${baseURL}discover/${type}?${apiKey}&${type=='tv' ? 'first_air_date_year' : 'primary_release_year'}=${year}&page=${page}`);
            setDataByYear(responce.data.results);

            setLoading(false)
        }
        fetchDataByYear();
        
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchParems,year])

    return (
        <>
            <Header />
            <div className="container">
                <div className="section movie-section">
                    <YearSectionSelections
                        type={type}
                        year={year}
                    />
                    <YearSectionHead
                        type={type}
                        year={year}
                        page={page}
                    />
                    <MovieCard
                        fetchData={dataByYear}
                        type={type}
                        loading={loading}
                        localstorageData={localstorageData}
                        setLocalstorageData={setLocalstorageData}
                    />
                    <YearSectionFooter
                        setSearchParems={setSearchParems}
                        type={type}
                        page={page}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default YearsPage;