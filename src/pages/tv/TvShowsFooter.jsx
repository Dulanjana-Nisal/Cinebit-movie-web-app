import { nextListBtn, preListBtn } from "../../utils/buttons";

function TvShowsFooter({ setSearchParems,listParem,page }) {
    console.log(listParem)
    return (
        <div className="section-footer">
            <div className="prev-btn">
                {
                    page > 1 &&
                    <button onClick={()=>preListBtn(setSearchParems,listParem,page)}>
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M15 19l-7-7 7-7"></path></svg>
                        Prev
                    </button>
                }
            </div>
            <div className="counter">
                <p>{`Page ${page} of ${listParem === 'top_rated' ? '120' : '500'}`}</p>
            </div>
            <div className="next-btn">
                {
                    page < (listParem === 'top_rated' ? '120' : '500') &&
                    <button onClick={()=>nextListBtn(setSearchParems,listParem,page)}>
                        Next
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 5l7 7-7 7"></path></svg>
                    </button>
                }
            </div>
        </div>
    )
}

export default TvShowsFooter;