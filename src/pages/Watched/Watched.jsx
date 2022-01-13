import { useEffect, useState } from 'react'
import axios from 'axios'
import './watched.scss'
import SearchList from '../../components/SearchList/SearchList'

const Watched = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://movie-review-app-1.herokuapp.com/watchlist')
        .then((response) => {
            // console.log(response)
            setMovies([...response.data])
            
        })
        .catch(( error) => {
            console.log(error);
        });
    }, [])
    return (
        <div className="watched">
            <h1 className="watched__header">WATCHED MOVIES</h1>
            <SearchList movies={movies}></SearchList>
        </div>
    )
}

export default Watched
