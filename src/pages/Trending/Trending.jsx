import axios from 'axios'
import { useEffect,useState } from 'react'
import SearchList from '../../components/SearchList/SearchList'
import './trending.scss'


const Trending = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://movie-review-app-1.herokuapp.com/trending')
        .then((response) => {
            setMovies([...response.data])
        })
        .catch(( error) => {
            console.log(error);
        });
    }, [])
    return (
        <div className="trending">
            <h1 className="trending__header"> TRENDING MOVIES </h1>
            <SearchList movies={movies} watched={true}></SearchList>
        </div>
    )
}

export default Trending
