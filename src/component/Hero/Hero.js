import React from "react";

function Hero() {
  return (
    <div className="container">
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">
            {" "}
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Location"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            When
          </label>
          <div className="input-group">
            <div className="input-group-text">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="When"
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">
            Preference
          </label>
          <select className="form-select" id="autoSizingSelect">
            <option selected>Price</option>
            <option value="1">500-2,500</option>
            <option value="2">2,500-5,000</option>
            <option value="3">5,000-10,000</option>
          </select>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">
            Preference
          </label>
          <select className="form-select" id="autoSizingSelect">
            <option selected>Property type</option>
            <option value="1">Apartment</option>
            <option value="2">Homes & Villas</option>
            <option value="3">Offices</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Hero;
