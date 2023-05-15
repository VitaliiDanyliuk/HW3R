import React, { Component } from "react";
import Btn from "../btn";
import { Form2 } from "../form2";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHideDemo2: false,
      inputValue: "",
      todo: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.showComponent1 = this.showComponent1.bind(this)
  };


//Додаємо форму з трьома кнопками
  addTodo = () => {
    this.setState((state) => { 
      return {
        ...state,
        showHideDemo2: true
     }
         })
  }

// Показуємо першу форму з кнопкою
  showComponent1(){
  this.setState({showHideDemo2: !this.state.showHideDemo2 });
    
  };

  // Записуємо введене значення у формі
  handleChange(event) { 
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { showHideDemo2} = this.state;
    return (
      <>
      <form>
          <input type="text" placeholder="Введіть значення..." onChange={this.handleChange}></input>
        <Btn value="зберегти 📀" className={"btn-save"} eventFN={this.addTodo}/>
      </form>
        <div>{showHideDemo2 && <Form2 arr={ this.state.todo} input={this.state.inputValue} handleChange={this.handleChange} />}</div>
        </>
    );
    
  }
}
