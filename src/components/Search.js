import React from "react";

function Search() {
  return (
    <div>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Search Term"
          aria-describedby="addon-wrapping"
        />
      </div>
      <br />
      <ul className="list-group">
        <li className="list-group-item">
          <h5>Programming</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore
            ducimus repellat?
          </p>
          <button className="btn btn-primary">GO</button>
        </li>
      </ul>
    </div>
  );
}

export default Search;
