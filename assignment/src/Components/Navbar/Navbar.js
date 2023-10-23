import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/Group.png" alt="Logo" width="50" height="50" />
        </a>
        <div className="navbar-text flex-fill text-center">
          <h1 className="mb-0">Welcome to the BPA</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
