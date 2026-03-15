import { Route, Routes } from 'react-router';
import './App.css'
import HomePage from './pages/Home/HomePage';
import MoviesPage from './pages/Movies/MoviesPage';
import TvShowsPage from './pages/tv/TvShowsPage';
import GenresPage from './pages/genres/GenresPage';
import YearsPage from './pages/2026/YearPage';
import DetailsPage from './pages/details/DetailsPage';
import WatchPage from './pages/watch/WatchPage';
import ShowGenres from './pages/genres/ShowGenres';
import TrendingPage from './pages/Trending/TrendingPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WatchlistPage from './pages/Watchlist/WatchlistPage';
import LanguagePage from './pages/languages/LanguagePage';
import ShowLanguage from './pages/languages/ShowLanguage';
import { useState } from 'react';

function App() {

    const [localstorageData, setLocalstorageData] = useState(JSON.parse(localStorage.getItem('watchlist')) || [])

    return (
        <Routes>
            <Route path='/' element={<HomePage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/movies' element={<MoviesPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/tv' element={<TvShowsPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/genres' element={<GenresPage />} />

            <Route path='/trending' element={<TrendingPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/watchlist' element={<WatchlistPage />} />

            <Route path='/languages' element={<LanguagePage />} />

            <Route path='/languages/:language' element={<ShowLanguage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/genres/:genre' element={<ShowGenres localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/year/:year' element={<YearsPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />
            
            <Route path='/:type/:id' element={<DetailsPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/watch/:type/:id' element={<WatchPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='/watch/:type/:id/:seasonId/:episodeId' element={<WatchPage localstorageData={localstorageData} setLocalstorageData={setLocalstorageData} />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default App
