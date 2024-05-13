import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

const ColourPicker = ({ onColorChange }) => {
  const [hex, setHex] = useState('#F44E3B');

  const handleChange = (color) => {
    setHex(color.hex);
    onColorChange(color.hex); // Invoke the callback with the selected color
  };

  return (
    <Circle
      colors={['#F44E3B', '#FE9200', '#FCDC00', '#DBDF00']}
      color={hex}
      onChange={handleChange}
    />
  );
};

export default ColourPicker;


// position: absolute;
// left: 15.6rem;
// z-index: 15;
// top: 16.8rem;
// opacity: 0.7;
// font-size: 30px;
// transform: rotate(3deg);