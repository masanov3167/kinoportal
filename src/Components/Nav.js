import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () =>{

  const qiymat = React.useRef();

    const [headerBg, setHeaderBg] = useState(false);

    const [time, setTime] = useState('00:00');

  function getTime(){
    let date = new Date();
    let hour = String(date.getHours()).padStart(2,0);
    let min = String(date.getMinutes()).padStart(2,0);
    let sec = String(date.getSeconds()).padStart(2,0);
   return `${hour}:${min}:${sec}`;
  }

  useEffect(() =>{
    setInterval(() =>{
      setTime(getTime);
    }, 1*1000)
  },[time])

  window.addEventListener('scroll', function(){
    if(window.scrollY >=80){
        setHeaderBg(true);
    }else{
        setHeaderBg(false)
    }
  })

  const nima = () =>{
      console.log(qiymat.current.value);
  }

    return (
        <>
            <header className={headerBg ? 'header header-bg' : 'header'}>
      <time className="time">{time}</time>

      <ol className="nav">

          <NavLink className='nav-item' to='/films' >Films</NavLink>
          <NavLink className='nav-item' to='/serials' >Serials</NavLink>
          <NavLink className='nav-item' to='/tv' >TV show</NavLink>
          <NavLink className='nav-item' to='/playlist' >Playlist</NavLink>
            <form className='search-form' method="post">
            <input onChange={nima} className={headerBg ? 'search search-bg' : 'search'} ref={qiymat} type="text" aria-label="type teh name of film" placeholder="Search" />
            <button className="search-btn">Search</button>
            </form>
        </ol>

      </header>
        </>
    )
}

export default Nav;