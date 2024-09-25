import React from 'react'

export default function Watchedmovies({watched, onOpenSec, onSetOpenSec}) {
  return (
    <>
       <div className="box">
          <button className="btn-toggle" onClick={()=> onSetOpenSec(!onOpenSec)}> 
                {onOpenSec ? '-' : '+'}
           </button>
                {onOpenSec && (
                  <>
                    <div className="summary">
                      <h2>Movies you watched</h2>
                      <div>
                        <p>
                          <span>#️⃣</span>
                          <span>2 movies</span>
                        </p>
                        <p>
                          <span>⭐️</span>
                          <span>4.4</span>
                        </p>
                        <p>
                          <span>🌟</span>
                          <span>4.2</span>
                        </p>
                        <p>
                          <span>⏳</span>
                          <span>200 min</span>
                        </p>
                      </div>
                    </div>

                    <ul className="list">
                        {watched.map((movies)=>(
                            <li key={movies.imdbRating}>
                              <img src={movies.Poster} alt={movies.Title}/>
                              <h3>{movies.Title}</h3>
                              <div>
                                <p>
                                  <span>⭐️</span>
                                  <span>{movies.imdbRating}</span>
                                </p>
                                <p>
                                  <span>🌟</span>
                                  <span>{movies.userRating}</span>
                                </p>
                                <p>
                                  <span>⏳</span>
                                  <span>{movies.runtime} min</span>
                                </p>
                              </div>
                            </li>
                        ))}
                    </ul>
                  </>
                )}  
        </div>  
    </>
  )
}
