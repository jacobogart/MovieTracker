import React from 'react';

const MovieCard = ({ title, overview, posterImg, id, rating, releaseDate }) => {
  let movieOverview;
  let ratingNum;
  let releaseYear = releaseDate.substring(0, 4);
  let percentage = rating * 10;

  if (overview.length > 150) {
    let shortOverview = overview
      .split(' ')
      .slice(0, 30)
      .join(' ');

    movieOverview = `${shortOverview}...`;
  } else {
    movieOverview = overview;
  }

  if (rating.toString().length === 1) {
    ratingNum = `${rating}.0`;
  } else {
    ratingNum = rating;
  }

  return (
    <article className="MovieCard">
      <img className="card-img" src={posterImg} alt={`${title} poster`}/>
      <div className="card-info">
        <div className="card-header">
          <div className="circle-wrapper">
            <svg viewBox="0 0 36 36" className="rating-circle">
              <path className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <path className="circle"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"/>
              <text x="9" y="23" className="rating-num">{ratingNum}</text>
            </svg>
          </div>
          <div className="card-title-wrap">
            <h2 className="card-title">{title}</h2>
            <p className="card-year">({releaseYear})</p>
          </div>
        </div>
        <p className="card-overview">{movieOverview}</p>
        <div className="more-info-btn" role="button">More Info</div>
      </div>
    </article>
  );
} 

export default MovieCard;