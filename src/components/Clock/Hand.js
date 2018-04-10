import React, { Component } from 'react';

export default class Hand extends Component {
  render = () => (
    <div className={`hand ${this.props.type}-hand`} />
  );
}
