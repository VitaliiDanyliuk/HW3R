import React, { Component } from "react";
// import Btn from "../btn";

export class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <form>
        <input type="text" value={this.props.input} onChange={this.props.handleChange}></input>
        <button type="button" onClick={() => console.log("Редагувати")}>✍️ - редагувати</button>
        <button type="button" onClick={() => console.log("Видалити")}>❌ - видалити</button>
        <button type="button" onClick={() => console.log("Куплено")}>✅ - куплено</button>
      </form>
    );

  }
}
