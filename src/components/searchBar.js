import React from 'react';

function SearchBar(props) {
    return (
        <div className="col col-sm-4">
            <input
                className="form-control"
                value={props.value}
                onChange={(e) => props.setSearch(e.target.value)}
                placeholder="Type movie name to search.."
            ></input>
        </div>
    );
}

export default SearchBar;