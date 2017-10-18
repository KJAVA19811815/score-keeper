import React, { Component } from "react";

import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import Player from "./Player";
import PlayerList from "./PlayerList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <TitleBar title={this.props.title} />
          <div className="wrapper">
            <PlayerList players={this.props.players} />
            <AddPlayer />
          </div>
        </div>
      </div>
    );
  }
}
