import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    // You'll implement this during your practice
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    // You'll implement this during your practice
    console.log('Component updated');
  }

  componentWillUnmount() {
    // You'll implement this during your practice
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>This is a basic class component with lifecycle methods</p>
        <p>Current Date: {this.state.currentDate.toLocaleDateString()}</p>
        {/* Add a button to change the date to 5 days from now */}
        <button onClick={() => this.setState({ currentDate: new Date(this.state.currentDate.getTime() + 5 * 24 * 60 * 60 * 1000) })}>Update Date</button>
        <p>Current Time: {this.state.currentDate.toLocaleTimeString()}</p>
        {/* add button that updates time when clicked */}
        <button onClick={() => this.setState({ currentDate: new Date() })}> Update Time</button>
      </div>
    );
  }
}

export default ClassComponent;
