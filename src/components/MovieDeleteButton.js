import "./MovieDeleteButton.css";

const MovieDeleteButton = (props) => {
    return (  
        <button className="movie-delete-button" onClick={props.deleteMovie}>Delete Movie</button>
    )
};

export default MovieDeleteButton;