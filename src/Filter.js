import React, { useEffect } from 'react'

const Filter = ({ activeGenre, setactiveGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return //mot to run after this
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className='filter-container'>
      <button
        onClick={() => setactiveGenre(0)}
        className={activeGenre === 0 ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setactiveGenre(35)}
        className={activeGenre === 35 ? 'active' : ''}
      >
        Comedy
      </button>
      <button
        onClick={() => setactiveGenre(28)}
        className={activeGenre === 28 ? 'active' : ''}
      >
        Action
      </button>
    </div>
  )
}

export default Filter
