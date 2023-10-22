import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-dark text-light" style={{ width: '250px', height: '100vh' }}>
      <div className="p-5">
        <img src="images/Group.png" alt="Logo" width="50" height="50" />
      </div>
      <ul className="list-group list-group-flush">
        <Link to="/profile" className="list-group-item bg-dark list-group-item-action text-light">Profile</Link>
        <Link to="/architect" className="list-group-item bg-dark list-group-item-action text-light">My Architect</Link>
      </ul>
      <div className="p-4 mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <span>Client User ID: 5486</span>
          {/* <img src="profile-image.png" alt="Profile" width="30" height="30" className="rounded-circle" /> */}
        </div>
        <Link to="/"><button className="btn btn-danger btn-block mt-3">Logout</button></Link>
      </div>
    </aside>
  );
}

export default Sidebar;
