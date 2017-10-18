import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "../imports/api/players";
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";
import Player from "../imports/ui/Player";
import PlayerList from "../imports/ui/PlayerList";
import App from "../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();
    const title = "Score Keep";
    ReactDOM.render(
      <App title={title} players={players} />,
      document.getElementById("app")
    );
  });
});
