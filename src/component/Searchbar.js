import React from "react";

function Searchbar() {
  return (
    <div className="container my-5">
      <form className="d-flex">
        <h3 className="mx-5">Search Properties to rent</h3>
        <input
          className="form-control me-2"
          style={{ width: "50%" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default Searchbar;
