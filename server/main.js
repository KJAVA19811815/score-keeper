import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/players";

Meteor.startup(() => {
  // Players.insert({
  //   name: "Roger",
  //   score: 25
  // });
  console.log(Players.find().fetch());
});
