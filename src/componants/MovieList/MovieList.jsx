import Movie from "./Movie/Movie";

const MovieList = ({}) => {
    return ( <div>
        <h4>My Movies</h4>
        <div>
            <div>
                <Movie>Princess Bride</Movie>
                <Movie>Forest Gump</Movie>
                <Movie>Iron Man</Movie>
            </div>
        </div>
    </div> 
    );
}
 
export default MovieList;