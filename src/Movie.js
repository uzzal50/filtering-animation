import React from 'react'
import { motion } from 'framer-motion'

const Movie = ({ title, backdrop_path }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2>{title}</h2>
      <img src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt='' />
    </motion.div>
  )
}

export default Movie
