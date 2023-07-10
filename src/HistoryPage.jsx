import React from "react";

const HistoryPage = ({ history }) => {
  return (
    <>
      <div className="d-flex  justify-content-center">
        <h4>History Page</h4>
      </div>
      <div className="row">
        {history.map((imageUrl, index) => (
          <div className="col-4">
            <img
              className="mt-2"
              key={index}
              src={imageUrl}
              style={{ width: "400px", height: "300px", objectFit: "cover" }}
              alt={`Dog ${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HistoryPage;
