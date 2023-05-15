import React, { Component } from "react";
import { Form } from "../form";
import Btn from "../btn";

export class List extends Component {
  state = {
  showHideDemo1: false,
  };

  showComponent = () => {
    this.setState({
      showHideDemo1: !this.state.showHideDemo1,
    });
  };

  render() {
    const { showHideDemo1} = this.state;
    return (
      <>
        <div>
          <Btn value="додати ➕" className="btn-add" eventFN={this.showComponent}/>
          {showHideDemo1 && <Form />}
        </div>
      </>
    );
  }
}
