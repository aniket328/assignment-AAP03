import React from 'react';
import Sidebar from '../Components/Navbar/Sidebar';

function Home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 bg-secondary
 d-flex justify-content-center align-items-center">
        <h1 className="display-3">Welcome Aboard</h1>
      </div>
    </div>
  );
}

export default Home;
