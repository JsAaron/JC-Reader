import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({"isToggleOn":!prevState.isToggleOn})
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
