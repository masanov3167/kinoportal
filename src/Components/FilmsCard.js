const FilmsCard = ({rated,img,title,date,dataset,addPlaylist}) =>{

    return(
        <>
            <li className="films-list-item"> 
                <time className="rated">{rated}</time>
                <img className="list-item-img" src={img} alt={title} />
                <div className="body">
                    <h3 className="movie-title">{title}</h3>
                    <time>{date}</time>
                    <div className="movies-btn-wrapper">
                        <button>More</button>
                        <button data-play-id={dataset} onClick={addPlaylist} >Add to playlist</button>
                    </div>
                </div>
            </li>
        </>

    )
}

export default FilmsCard;