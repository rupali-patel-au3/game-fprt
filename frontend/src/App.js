import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import Pagination from './components/Pagination';
import Search from './components/Search';

const URL = 'http://localhost:5000/games';
function App() {
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPagination, setTotalPagination] = useState(null);

  useEffect(() => {
    getData(pageNumber);
  }, [pageNumber]);

  const getData = async (pageNum) => {
    const response = await axios.get(`${URL}?page=${pageNum}`);
    setData(response.data.data);
    setTotalPagination(response.data.totalPaginationNumber);
  };

  const handleClick = (number) => {
    setPageNumber(number);
  };

  const handleSearch = async (text) => {
    const response = await axios.get(`${URL}?text=${text}`);
    setData(response.data.data);
  };
  return (
    <div className="container-fluid">
      {!data ? (
        <h1 className="text-center">Loading......</h1>
      ) : (
        <React.Fragment>
          <Search handleSearch={handleSearch} />
          <List data={data} />
          <Pagination
            handleClick={handleClick}
            totalPagination={totalPagination}
            pageNumber={pageNumber}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
