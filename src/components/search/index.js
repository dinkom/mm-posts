import React from 'react';
import PropTypes from 'prop-types';

import '../../scss/search.scss';

function Search(props) {
  return (
    <div className="search">
      <input
        className="form-control"
        onChange={(e) => { props.searchPostsByUser(e.target.value); }}
        placeholder="Search by user"
      />
    </div>
  );
}

export default Search;

Search.propTypes = {
  searchPostsByUser: PropTypes.func.isRequired
};
