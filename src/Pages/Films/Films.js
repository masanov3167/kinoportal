import React,{useState, useContext} from "react";
import { Context } from "../../Components/Context";
import FilmsCard from "../../Components/FilmsCard";

const Films = () =>{
    const {value,getPopularFilms, IMG_URL,todos, setTodos,alert, setAlert} = useContext(Context);


    const [test, setTest] = useState(false);


    const addPlaylist = (evt) =>{
        const btnId = evt.target.dataset.playId - 0;
        const find = value.popularfilms.results.find(a => a.id === btnId);

        if(!todos.includes(find)){ 
            setAlert({
                display: true,
                text: 'Added to bookmark list' 
            });
            

            window.localStorage.setItem('todos', JSON.stringify([...todos, find])); 
            return setTodos([...todos, find]);
        }
    }

   
    return(
        <>
            <section className={value.filmspopular ? 'films height' : 'films'}>
                <div className="films-btn-wrapper">
                    <button onClick={getPopularFilms} className={value.filmspopular ? 'btn-outline' : ''} >Popular</button>
                    <button >Top Rated</button>
                </div>
                
                    <span className="sort"></span>

                    {
                        value.filmspopular ? (
                        <ol onScrollCapture={() => setTest(true)} className='films-list'>
                            {
                            value.popularfilms.results.map(e => (
                                <FilmsCard rated={e.vote_average} img={IMG_URL + e.poster_path} title={e.title} date={e.release_date} dataset={e.id} addPlaylist={addPlaylist} />
                            ))
                            }
                        </ol>
                        ) : (
                        <></>
                        )
                    }
            </section>

            <div className={alert.display ? 'alert-wrapper' : 'd-none'}>
                    <h3 className="alert">{alert.text}</h3>
            </div>
        </>
    )
}

export default Films;



