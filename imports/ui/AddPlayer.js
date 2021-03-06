import React from "react";
import { Component } from "react";
import { Players } from "../api/players";

export default class AddPlayer extends Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = "";
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="name" />
          <button className="button">Add player</button>
        </form>
        <p>ADD player.</p>
      </div>
    );
  }
}
