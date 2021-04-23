import {createContext, useContext, useEffect} from "react";
import axios from "axios";
import {LoadingContext} from "./LoadingContext";


export const MoviesContext = createContext({});

export function MoviesProvider({children}){

    const[movies, setMovies]=useContext(null);
    const {setLoading, setMessage} = useContext(LoadingContext);

    const fetchMovieList = async () => {
        await axios.get('https://swapi.dev/api/films/')
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getMovieById = (id) => {
        if(movies){
            const list = movies.filter(el => el.id === id);
            if(list){
                return list[0].label
            }
        }
        return null;
    }

    useEffect(async () => {
        setLoading(true);
        setMessage('Teste');
        await fetchMovieList();
    }, [setLoading, setMessage]);

    return(
        <MoviesProvider value={{
            movies,
            getMovieById
        }}>
            {children}
        </MoviesProvider>
    )

}