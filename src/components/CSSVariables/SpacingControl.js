import React, { Fragment, PureComponent } from 'react';

export default class SpacingControl extends PureComponent {
  render() {
    return (
      <Fragment>
        <label htmlFor="spacing">Spacing</label>
        <input
          id="spacing" type="range" name="spacing" min={10} max={200}
          defaultValue={10} data-sizing="px"
        />
      </Fragment>
    );
  }
}
