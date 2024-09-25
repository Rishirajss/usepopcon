import React from 'react'

export default function Search({query, onSetquery}) {
  return (
    <>
      <input className="search" type="text" value={query} onChange={(e)=> onSetquery(e.target.value)} placeholder="Search movies..." />   
    </>
  )
}
