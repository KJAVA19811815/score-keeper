import React, { Component } from "react";
import Player from "./Player";

export default class PlayerList extends Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player.</p>
        </div>
      );
    } else {
      return this.props.players.map(function(player) {
        return <Player key={player._id} player={player} />;
      });
    }
  }
  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}
