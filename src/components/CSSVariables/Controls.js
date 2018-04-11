import React, { PureComponent } from 'react';
import styled from 'styled-components';

import SpacingControl from './SpacingControl';
import BlurControl from './BlurControl';
import ColorPicker from './ColorPicker';

class Controls extends PureComponent {
  render() {
    return (
      <div className={`controls ${this.props.className}`}>
        <SpacingControl />
        <BlurControl />
        <ColorPicker />
      </div>
    );
  }
}

export default styled(Controls)`
  margin-bottom: 50px;
`;
