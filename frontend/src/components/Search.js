import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
    setText('');
  };
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="form-group flex-1 m-0">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Search"
              className="form-control"
              value={text}
            />
          </div>
          <button className="btn btn-outline-success">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
