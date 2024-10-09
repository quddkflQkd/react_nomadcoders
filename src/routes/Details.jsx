import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState();
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div>
            {loading ? (
                <h1>Loading</h1> 
                ) : (
                <div>
                    <h1>{movie.title}</h1>
                    <hr />
                    <ul>
                        {movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <div>
                    <h3>Description Intro</h3>
                    <q>{movie.description_intro}</q>
                    </div>
                    <p>&nbsp;</p>
                    <h3 style={{display:"inline"}}>Like Count</h3>
                    <p style={{display:"inline"}}>&nbsp;&nbsp;&nbsp;&nbsp;{movie.like_count}</p>
                </div>
                )
        }
        </div>
    );
}

export default Detail;