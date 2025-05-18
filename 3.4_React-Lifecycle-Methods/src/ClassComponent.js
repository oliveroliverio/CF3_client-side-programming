import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // You'll add state here during your practice
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
      </div>
    );
  }
}

export default ClassComponent;
