import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    // start timer when component mounts
    this.timer = setInterval(() => this.setState({ currentDate: new Date() }), 1000);
    console.log('Component mounted');
    console.log(`timer started: ${this.timer}`)
  }

  componentDidUpdate(prevProps, prevState) {
    // You'll implement this during your practice
    console.log('Component updated');
  }

  componentWillUnmount() {
    // You'll implement this during your practice
    console.log('Component will unmount');
    clearInterval(this.timerID)
    console.log(`timer stopped: ${this.timerID}`)
  }

  render() {
    return (
      <>
        <h2> Hello, {this.props.name}!</h2>
        <p> The time is: {this.state.currentDate.toLocaleTimeString()}</p>
        <p> The date is: {this.state.currentDate.toLocaleDateString()}</p>
        <p> click on this button to update the time: <button onClick={() => this.setState({ currentDate: new Date() })}>Update Time</button></p>
      </>
    );
  }
}

export default ClassComponent;
