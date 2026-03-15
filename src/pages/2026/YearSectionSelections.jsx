import { Link } from "react-router";

function YearSectionSelections({ type, year}) {
    return (
        <div className="section-selections">
            <div className="selection-bar">
                <Link to={`/year/2026?type=${type}`}><button className={year === '2026' ? 'select' : 'un-select'}>2026</button></Link>
                <Link to={`/year/2025?type=${type}`}><button className={year === '2025' ? 'select' : 'un-select'}>2025</button></Link>
                <Link to={`/year/2024?type=${type}`}><button className={year === '2024' ? 'select' : 'un-select'}>2024</button></Link>
                <Link to={`/year/2023?type=${type}`}><button className={year === '2023' ? 'select' : 'un-select'}>2023</button></Link>
                <Link to={`/year/2022?type=${type}`}><button className={year === '2022' ? 'select' : 'un-select'}>2022</button></Link>
                <Link to={`/year/2021?type=${type}`}><button className={year === '2021' ? 'select' : 'un-select'}>2021</button></Link>
                <Link to={`/year/2020?type=${type}`}><button className={year === '2020' ? 'select' : 'un-select'}>2020</button></Link>
                <Link to={`/year/2019?type=${type}`}><button className={year === '2019' ? 'select' : 'un-select'}>2019</button></Link>
                <Link to={`/year/2018?type=${type}`}><button className={year === '2018' ? 'select' : 'un-select'}>2018</button></Link>
                <Link to={`/year/2017?type=${type}`}><button className={year === '2017' ? 'select' : 'un-select'}>2017</button></Link>
                <Link to={`/year/2016?type=${type}`}><button className={year === '2016' ? 'select' : 'un-select'}>2016</button></Link>
            </div>
        </div>
    )
}

export default YearSectionSelections;