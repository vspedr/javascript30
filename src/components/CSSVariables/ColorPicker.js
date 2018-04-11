import React, { Fragment, PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  render() {
    return (
      <Fragment>
        <label htmlFor="base">Base Color</label>
        <input id="base" type="color" name="base" defaultValue="#ffc600"/>
      </Fragment>
    );
  }
}
