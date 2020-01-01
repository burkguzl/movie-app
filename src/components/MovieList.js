import React from 'react'

class MovieList extends React.Component {
    render() {
        if (this.props.movies === null || this.props.movies.Response === "False") {
            return <div style={warning}>Please enter a valid movie or series title!</div>
        }
        console.log(this.props.movies.Search)
        return (
            <div className="row">
                {
                    this.props.movies.Search.map(movie => (
                        <div className="col-md-3" key={movie.imdbID}>
                            <div className="card" style={cardStyle}>
                                <img src={movie.Poster} class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
                                    <p className="card-text">{movie.Type}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default MovieList;

const cardStyle = {
    marginTop: '15px'
}

const warning = {
    fontSize: "15px",
    marginTop: "10px"
}