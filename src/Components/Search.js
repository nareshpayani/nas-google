import React from 'react'
import "../Css/Search.css"
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core';

function Search() {
    return (
      <div className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon"></SearchIcon>
          <input />
          <MicIcon />
        </div>

        <div className="search__buttons">
          <Button>Google Search</Button>
          <Button variant="outlined">I'm Feeling lucky</Button>
        </div>
      </div>
    );
}

export default Search
