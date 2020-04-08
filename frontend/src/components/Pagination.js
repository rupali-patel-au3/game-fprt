import React from 'react';

const Pagination = (props) => {
  const { handleClick, totalPagination, pageNumber } = props;
  const pageNumberArray = Array.from(Array(totalPagination)).map(
    (_, index) => index + 1
  );

  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <nav
          aria-label="Page navigation"
          className="d-flex justify-content-center"
        >
          <ul className="pagination ">
            {pageNumberArray.map((num) => (
              <li
                key={num}
                onClick={() => handleClick(num)}
                className={`page-item ${num === pageNumber ? 'active' : ''}`}
              >
                <span className="page-link">{num}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
