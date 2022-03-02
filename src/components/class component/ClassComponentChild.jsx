import React, { Component } from 'react';

export default class ClassComponentChild extends Component {
  render() {
    return <div>
        <h1>count:{this.props.NewValue}Hello this is ClassComponentChild</h1>
    </div>;
  }
}
