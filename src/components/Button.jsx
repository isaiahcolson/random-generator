import React, { Component } from 'react';

class Button extends Component {
  watchList = ["NOS4A2", "The Simpsons", "Blade", "Darkest Hour", "Good Morning Vietnam"]

  generateSelection = (array) => {
    const item = array[Math.floor(Math.random() * array.length)];
    alert(item);
  }

  render() {
    return(
      <button onClick={() => this.generateSelection(this.watchList)}>
        Get Title
      </button>
    );
  }
}

export default Button;
