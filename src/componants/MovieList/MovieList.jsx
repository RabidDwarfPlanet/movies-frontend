import MovieInfo from "./MovieInfo/MovieInfo";

const MovieList = ({}) => {
    const selectedMovie = [{
        title:'Princess Bride',
        runningTime:13, 
        genre:'Romantic Genre'
    }];
    const movieItems = selectedMovie.map((movie) => <MovieInfo movieobj={movie} />)
    return ( <div>
        <h4>My Movies</h4>
        <div>
            <div>
                {movieItems}
            </div>
        </div>
    </div> 
    );
}
 
export default MovieList;