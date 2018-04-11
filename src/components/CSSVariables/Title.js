import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Title extends PureComponent {
  render() {
    return (
      <h2 className={this.props.className}>
        Update CSS Variables with <span className='hl'>JS</span>
      </h2>
    );
  }
}

export default styled(Title)`
  & > span.hl {
    color: var(--base);
  }
`;
