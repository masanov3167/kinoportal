import React, { useState, useEffect} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

    const SITE_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '16bebfc50341cc543211465e5af7fc48';
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    
    const [alert, setAlert] = useState({
        display:false,
        text:'',
    });

    useEffect(() =>{
        setTimeout(() =>{
            setAlert({
                display:false,
                text:''
            })
        },800)
    },[alert])
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || []);
    const [value, setValue] = useState({
		filmspopular: false,
        filmstop: false,
		popularfilms: {},
		topfilms: {},
		error: false,
	});

    const getPopularFilms = () =>{
        fetch(`${SITE_URL}/movie/top_rated?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((data) =>
				setValue({
					filmspopular: true,
					popularfilms: data,
					error: false,
				}),
			);
    }

	return (
		<Context.Provider value={{alert, setAlert, todos, setTodos,value,getPopularFilms,IMG_URL}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };