import { imageUrl } from "./pathNames";

export const mockUncleanMovie = {
  vote_count: 4354,
  id: 299534,
  video: false,
  vote_average: 8.6,
  title: 'Avengers: Endgame',
  popularity: 395.542,
  poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  original_language: 'en',
  original_title: 'Avengers: Endgame',
  genre_ids: [
    12,
    878,
    28
  ],
  backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
  adult: false,
  overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
  release_date: '2019-04-24'
};

export const mockCleanMovie = {
  id: 299534,
  overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  posterImg: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  rating: 8.6,
  releaseDate: "2019-04-24",
  title: "Avengers: Endgame"
};

export const uncleanPeople = {
  crew: [
    { name: 'Ms. Director', job: 'Director'},
    { name: 'Mr. Writer', job: 'Writer'},
    { name: 'Kyle', job: 'Craft Services'},
  ],
  cast: [
    { 
      name: 'Chris Evans',
      character: 'Captain America',
      profile_path: '/fdsfdsfsdfa.png',  
      cast_id: 1234,
      hotness: 10
    },
    { 
      name: 'Sebastian Stan',
      character: 'Bucky',
      profile_path: '/yeeeeeeet.png',  
      cast_id: 4321,
      hotness: 9.6
    }
  ]
};

export const mockCleanPeople = {
  director: [{ name: 'Ms. Director', job: 'Director'}],
  writer: [{ name: 'Mr. Writer', job: 'Writer'}],
  cast: [
    { 
      name: 'Chris Evans',
      character: 'Captain America',
      headshot: `${imageUrl}/fdsfdsfsdfa.png`,  
      id: 1234,
    },
    { 
      name: 'Sebastian Stan',
      character: 'Bucky',
      headshot: `${imageUrl}/yeeeeeeet.png`,  
      id: 4321,
    }
  ]
};

export const mockUser = {
  name: 'Jacob',
  id: 1,
  favorites: [11111, 22222, 33333]
};

