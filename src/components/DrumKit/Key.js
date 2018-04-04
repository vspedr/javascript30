import React, { Component } from 'react';
import styled from 'styled-components';


class Key extends Component {
  constructor(props) {
    super(props);
    this.div = React.createRef();
  }

  componentDidMount() {
    this.div.current.addEventListener('transitionend', this.removeTransition);
  }

  componentWillUnmount() {
    this.div.current.removeEventListener('transitionend', this.removeTransition);
  }

  removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  render() {
    return (
      <div
        ref={this.div}
        data-key={this.props['data-key']}
        className={`key ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

export default styled(Key)`
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  text-align: center;
  text-transform: uppercase;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;

  &.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }
`;
