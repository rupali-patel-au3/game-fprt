import React from 'react';

const List = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-12">
        <table className="table">
          <thead className="thead-dark">
            <tr className="text-center">
              <th>Rank</th>
              <th>Name</th>
              <th>Platform</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Publisher</th>
              <th>Global Sales</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((dt) => (
              <tr key={dt._id} className="text-center">
                <th>{dt.Rank}</th>
                <td>{dt.Name}</td>
                <td>{dt.Platform}</td>
                <td>{dt.Year}</td>
                <td>{dt.Genre}</td>
                <td>{dt.Publisher}</td>
                <td>{dt.Global_Sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
