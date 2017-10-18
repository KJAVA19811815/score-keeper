import React, { Component } from "react";
import Player from "./Player";

export default class PlayerList extends Component {
  renderPlayers() {
    return this.props.players.map(function(player) {
      return <Player key={player._id} player={player} />;
    });
  }
  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}
