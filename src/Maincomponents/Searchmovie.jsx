import React from 'react'

export default function Searchmovie({movie, onOpen, onSetOpen}) {
  return (
    <>
        <div className="box">
                <button className="btn-toggle" onClick={()=> onSetOpen(!onOpen)}>
                        {onOpen ? '-' : '+'}
                 </button>
                 {onOpen && (
                    <ul className='list'>
                        {movie.map((movie)=>(
                            <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <div>
                                <p>
                                <span>🗓</span>
                                <span>{movie.Year} Year</span>
                                </p>
                            </div>
                            </li>
                        ))}
                    </ul>   
                  )} 
            </div>  
    </>
  )
}
