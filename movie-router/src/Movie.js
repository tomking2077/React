import React, { Component } from 'react';
import config from './config';
import axios from 'axios';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const mID = this.props.match.params.movieID;
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mID}?api_key=${config.apiKey}`;
        axios.get(singleMovieUrl).then((response) => {
            console.log(response.data);
            this.setState({
                movie: response.data
            });
        });

    }

    render(props) {
        //console.log(this.props.match);
        if (this.state.movie.title === undefined) {
            return (
                <h1>Loading...</h1>
            );
        } else {
            const movie = this.state.movie;
            const imageUrl = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            return (
                <div>
                    <img src={imageUrl} />
                    <p>{movie.title}</p>
                    <p>Budget: {movie.budget}</p>
                    <p>Tagline: {movie.tagline}</p>
                    <p>Overview: {movie.overview}</p>
                </div>
            );
        }
    }
}

export default Movie;