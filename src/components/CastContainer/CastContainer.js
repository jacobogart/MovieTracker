import React from 'react';
import PropTypes from "prop-types";
import CastCard from '../CastCard/CastCard';

export const CastContainer = (props) => {
  let castCards;

  if (props.cast) {
    castCards = props.cast.map(person => <CastCard key={person.id} data={person} />);
  } else {
    castCards = <p>Loading...</p>
  }

  return (
    <section className="more-details-bottom">
      <h2>Cast</h2>
      <div className="flex-wrapper">
        <div className="CastContainer">
          {castCards}
        </div>
      </div>
    </section>
  );
}

CastContainer.propTypes = {
  cast: PropTypes.array
};
