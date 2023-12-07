const MovieInfo = ({ movieobj }) => {
    return ( <div>
        <h1>{movieobj.title}</h1>
        <div>
            <span>Running Time: </span>
            <span>{movieobj.runningTime}</span>
        </div>
        <div>
            <span>Genre: </span>
            <span>{movieobj.genre}</span>
        </div>
    </div> );
}
 
export default MovieInfo;