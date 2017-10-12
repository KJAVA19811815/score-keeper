import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "../imports/api/players";
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";

const renderPlayers = playersList => {
  return playersList.map(function(player) {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points
        <button
          onClick={() => {
            Players.update(
              { _id: player._id },
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
              { _id: player._id },
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
              _id: player._id
            });
          }}
        >
          X
        </button>
      </p>
    );
  });
};

const handleSubmit = e => {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  if (playerName) {
    e.target.playerName.value = "";
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBar />
        {renderPlayers(players)}
        <AddPlayer />
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="name" />
          <button>Add player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
