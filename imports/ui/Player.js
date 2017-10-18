import React, { Component } from "react";
import { Players } from "../api/players";

export default class Player extends Component {
  render() {
    return (
      <div key={this.props.player._id} className="item">
        <p>
          {this.props.player.name} has {this.props.player.score} point(s)
        </p>
        <button
          onClick={() => {
            Players.update(
              { _id: this.props.player._id },
              {
                $inc: { score: 1 }
              }
            );
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            Players.update(
              { _id: this.props.player._id },
              {
                $inc: { score: -1 }
              }
            );
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            Players.remove({
              _id: this.props.player._id
            });
          }}
        >
          X
        </button>
      </div>
    );
  }
}
