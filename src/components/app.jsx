import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "3d5O10XObbr8LW4bDY" },
      { id: "l1KsDfM293DMW4SXu" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="3d5O10XObbr8LW4bDY" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {gifs} />
        </div>
      </div>
    );
  }
}

export default App;
