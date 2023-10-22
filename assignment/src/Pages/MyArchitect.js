import React, { useState } from "react";
import Sidebar from "../Components/Navbar/Sidebar";

function MyArchitect() {
  const [selectedArchitect, setSelectedArchitect] = useState(null);

  const architectData = [
    {
      id: 1,
      name: "Architect 1",
      image: "Ellipse2.png",
      mobile: "123-456-7890",
      email: "architect1@example.com",
      region: "City A",
      experience: "5 years",
    },
    {
      id: 2,
      name: "Architect 2",
      image: "Ellipse2.png",
      mobile: "987-654-3210",
      email: "architect2@example.com",
      region: "City B",
      experience: "8 years",
    },
    // Add more architect data as needed
];

  const handleSelectArchitect = (architectId) => {
    if (architectId === selectedArchitect) {
      setSelectedArchitect(null);
    } else {
      setSelectedArchitect(architectId);
    }
  };

  const handleRemoveArchitect = () => {
    setSelectedArchitect(null);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 m-5 p-5">
        <div className="row">
          {architectData.map((architect) => (
            <div key={architect.id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "75%" }}>
                <img
                  src={`images/${architect.image}`}
                  className="card-img-top mx-auto rounded-circle"
                  alt={architect.name}
                  style={{ width: "75px", height: "75px" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{architect.name}</h5>
                  <p className="card-text">
                    Mobile: {architect.mobile}
                    <br />
                    Email: {architect.email}
                    <br />
                    Region: {architect.region}
                    <br />
                    Experience: {architect.experience}
                  </p>
                </div>

                <div className="card-footer text-center">
                  <button
                    className={`btn ${
                      selectedArchitect === architect.id
                        ? "btn-success"
                        : "btn-primary"
                    }`}
                    onClick={() => handleSelectArchitect(architect.id)}
                  >
                    {selectedArchitect === architect.id ? "Selected" : "Select"}
                  </button>
                  {selectedArchitect === architect.id && (
                    <button
                      className="btn btn-danger mr-5 ml-2"
                      onClick={handleRemoveArchitect}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyArchitect;
