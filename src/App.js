import { useState, useEffect } from 'react'
import Filter from './Filter'
import Movie from './Movie'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setactiveGenre] = useState(0)

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=372a58f6df175af0621b5a428aa25d21&language=en-US&page=1'
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  useEffect(() => {
    fetchPopular()
  }, [])

  return (
    <div className='App'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setactiveGenre={setactiveGenre}
      />
      <motion.div layout className='popular'>
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} {...movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App
