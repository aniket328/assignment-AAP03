import React, { useState } from 'react';
import Sidebar from '../Components/Navbar/Sidebar';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    Name: 'John Doe',
    PlotNumber: '123',
    SectorNumber: 'A',
    UrbanEstate: 'Sample Urban Estate',
    Zone: 'Zone A',
    Area: 'Sample Area',
    IsCommercial: 'Yes',
    Floors: 3,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="m-5 p-5 flex-grow-1">
        <table className="table">
          <tbody>
            {Object.entries(profileData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}:</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setProfileData({ ...profileData, [key]: e.target.value })}
                    />
                  ) : (
                    <span>{value}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditing ? (
          <div>
            <button className="btn btn-success m-3" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary m-3" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn text-light

          bg-dark" onClick={handleEdit}>
            Edit Data 
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
