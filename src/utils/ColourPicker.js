import React, { useState } from 'react';
import Circle from '@uiw/react-color-circle';

const ColourPicker = () => {
  const [hex, setHex] = useState('#F44E3B');

  const handleChange = (color) => {
    setHex(color.hex);
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
