import React, { Fragment, PureComponent } from 'react';

import Title from './Title';
import Controls from './Controls';
import Image from './Image';
import './root.css';

export default class VariablesDemo extends PureComponent {
  componentDidMount() {
    const inputs = document.querySelectorAll('.controls input');
    console.log(inputs);
    inputs.forEach(input => input.addEventListener('change', this.handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', this.handleUpdate));
  }

  handleUpdate() {
    console.log(this.name, this.value, this.dataset.sizing);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  render() {
    return (
      <Fragment>
        <Title />
        <Controls />
        <Image />
      </Fragment>
    );
  }
}
