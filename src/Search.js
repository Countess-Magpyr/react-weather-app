import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="container">
      <form className="search-form" id="search-form">
        <div className="row mt-3">
          <div className="col-6">
            <input
              type="search"
              placeholder="City"
              autofocus="on"
              autocomplete="off"
              id="city-input"
              className="form-control shadow-sm"
            />
          </div>

          <div className="col-6">
            <input
              type="submit"
              value="Search"
              className="form-control-btn btn btn-primary shadow-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
