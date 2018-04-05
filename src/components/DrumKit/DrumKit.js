import React, { Component, Fragment } from 'react';

import Kbd from './Kbd';
import Key from './Key';
import Keys from './Keys';
import SoundName from './SoundName';
import sounds from '../../assets/sounds';

class DrumKit extends Component {
  constructor(props) {
    super(props);
    this.keyCodes = {
      a: { code: 65, sound: 'boom' },
      s: { code: 83, sound: 'clap' },
      d: { code: 68, sound: 'hihat' },
      f: { code: 70, sound: 'kick' },
      g: { code: 71, sound: 'openhat' },
      h: { code: 72, sound: 'ride' },
      j: { code: 74, sound: 'snare' },
      k: { code: 75, sound: 'tink' },
      l: { code: 76, sound: 'tom' },
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.playSound);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.playSound);
  }

  removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    if (key) key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  mapKeyCodeToKeyComponent(keyCodes) {
    return Object.keys(keyCodes).map(kc => (
      <Key data-key={keyCodes[kc].code} key={kc}>
        <Kbd>{kc}</Kbd>
        <SoundName>{keyCodes[kc].sound}</SoundName>
      </Key>
    ));
  }

  mapKeyCodeToAudio(keyCodes) {
    return Object.keys(keyCodes).map(kc => (
      <audio
        data-key={keyCodes[kc].code}
        key={kc}
        src={sounds[keyCodes[kc].sound]}
      />
    ));
  }

  render() {
    const { keyCodes } = this;
    return (
      <Fragment>
        <Keys>
          { this.mapKeyCodeToKeyComponent(keyCodes) }
        </Keys>
        { this.mapKeyCodeToAudio(keyCodes)}
      </Fragment>
    );
  }
};

export default DrumKit;
