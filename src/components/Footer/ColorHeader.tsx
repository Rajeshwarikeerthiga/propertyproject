import React from 'react';
import style from './footer.module.css';

const ColoredHeader: React.FC = () => {
  return (
    <a href="#" className={style.icon8}>

        <span style={{ color: 'red' }}>Respect</span>
        <span style={{ color: 'green' }}> Property</span>
        <span style={{ color: 'white' }}> Owner</span>
     
    </a>
  );
};

export default ColoredHeader;
