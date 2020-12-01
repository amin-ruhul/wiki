import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const resData = await axios("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(resData.data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [term]);

  const renderElement = results.map((result) => {
    return (
      <div key={result.pageid}>
        <ul className="list-group">
          <li className="list-group-item">
            <h5>{result.title}</h5>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }} />
            {/* <span dangerouslySetInnerHTML>={{ __html: result.snippet }}</span> */}
            <a
              className="btn btn-primary"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              GO
            </a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <div className="input-group flex-nowrap">
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Search Term"
          aria-describedby="addon-wrapping"
          value={term}
        />
      </div>
      <br />
      {renderElement}
    </div>
  );
}

export default Search;
