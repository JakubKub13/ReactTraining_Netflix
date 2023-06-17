import './ReloadMovieButton.css';

const ReloadMovieButton = (props) => {
    return (
        <button className="reload-movies-button" onClick={props.reloadMovie}>Reload Movies</button>
    )
}

export default ReloadMovieButton;