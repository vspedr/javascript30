import React, { Fragment, PureComponent } from 'react';

export default class BlurControl extends PureComponent {
  render() {
    return (
      <Fragment>
        <label htmlFor="blur">Blur</label>
        <input id="blur" type="range" name="blur" min={0} max={25}
          defaultValue={0} data-sizing="px"
        />
      </Fragment>
    );
  }
}
