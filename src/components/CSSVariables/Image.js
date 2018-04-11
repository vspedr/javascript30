import React, { PureComponent } from 'react';
import styled from 'styled-components';

import photo from '../../assets/img/photo.jpeg';


class Image extends PureComponent {
  render() {
    return (
      <img className={this.props.className} src={photo} alt="Woman walking on a mountain" />
    );
  }
}

export default styled(Image)`
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
`;
