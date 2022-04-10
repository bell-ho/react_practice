import React from 'react';
import ColorContext, { ColorProvider } from '../contexts/color';
import ColorBox from './ColorBox';
import SelectColors from './SelectColors';

const Context = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default Context;
