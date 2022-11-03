import { use, Suspense } from 'react'

async function getMovies() {
  let response = await fetch('http://localhost:3000/api/movies')

  return response.json()
}

export default function Movies() {
  let movies = use(getMovies())
  
  return (
    <div>
      <h1 className="title">{movies[0].name}</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.serie} 
          </li>
        ))}
      </ul>
    </div>
  )
}
