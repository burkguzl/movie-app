import React from 'react'
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import './MoviePage.css'

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        }
    }
    handleFilterTextChange = (_filterText) => {
        fetch(`https://www.omdbapi.com/?s=${_filterText}&apikey=4a3b711b`)
            .then(response => {
                response.json()
                    .then(data => {
                        this.setState({
                            movies: data
                        })
                    })
            })
    }
    render() {
        console.log(this.state.movies)
        return (
            <div className="container">
                <Header />
                <Search handleFilterTextChange={this.handleFilterTextChange} />
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}

export default MoviePage;