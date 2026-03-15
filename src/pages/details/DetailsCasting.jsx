
import userNotFound from "../../assets/images/user-notfound.png";

function DetailsCasting({ peopleData }) {
    return (
        <div className="section casting">
            <div className="casting-head">
                <p>Cast</p>
            </div>
            <div className="casting-body">
                <div className="profiles-row">
                    {peopleData.slice(0, 8).map((peopel) => {
                        return (
                            <div className="profile-card" key={peopel.id}>
                                <div className="img">
                                    {peopel.profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${peopel.profile_path}`} alt="" /> : <img src={userNotFound} alt="" />}
                                </div>
                                <div className="data">
                                    <h3>{peopel.original_name}</h3>
                                    <p>{peopel.character}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailsCasting;
