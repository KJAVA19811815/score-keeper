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
    // return (
    //   <p key={player._id}>
    //     {player.name} has {player.score} points
    //     <button
    //       onClick={() => {
    //         Players.update(
    //           { _id: player._id },
    //           {
    //             $inc: { score: 1 }
    //           }
    //         );
    //       }}
    //     >
    //       +
    //     </button>
    //     <button
    //       onClick={() => {
    //         Players.update(
    //           { _id: player._id },
    //           {
    //             $inc: { score: -1 }
    //           }
    //         );
    //       }}
    //     >
    //       -
    //     </button>
    //     <button
    //       onClick={() => {
    //         Players.remove({
    //           _id: player._id
    //         });
    //       }}
    //     >
    //       X
    //     </button>
    //   </p>
    // );
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBar title="SCORE-KEEP" />
        {renderPlayers(players)}
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"));
  });
});
