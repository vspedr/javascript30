import React from 'react';

import { storiesOf } from '@storybook/react';

import Clock from '../src/components/Clock/Clock';
import DrumKit from '../src/components/DrumKit/DrumKit';

storiesOf('#JavaScript30', module)
  .add('Day 1 - DrumKit', () => <DrumKit />)
  .add('Day 2 - Clock', () => <Clock />);
