import React from "react";
import { Component } from "react";

export default class TitleBar extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
