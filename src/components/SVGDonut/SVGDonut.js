import React from 'react';
import PropTypes from 'prop-types';

export const SVGDonut = ({stat, string}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
      <circle 
        className="circle-inner" 
        cx="21" cy="21" 
        r="15.91549430918954" 
        fill="#fff">
      </circle>
      <circle 
        className="circle-whole" 
        cx="21" 
        cy="21" 
        r="15.91549430918954" 
        fill="transparent" 
        stroke="#d2d3d4"  
        strokeWidth="3">
      </circle>
      <circle 
        className="circle-colored" 
        cx="21" 
        cy="21" 
        r="15.91549430918954" 
        fill="transparent" 
        stroke="#2c3e50"  
        strokeWidth="3" 
        strokeDasharray={`${Math.floor(stat * 100)}, 
          ${(100 - Math.floor(stat * 100))}`}
        strokeDashoffset="75">
      </circle>
      <g className="circle-copy">
        <text 
          x="32%" 
          y="52%" 
          fontSize='8px' 
          className="circle-number">
          {`${stat
            .toLocaleString('en-IN', 
              { style: 'percent', maximumSignificantDigits: 2 })
          }`}
        </text>
        <text 
          x="33%" 
          y="65%" 
          fontSize='4px' 
          className="circle-label">
          {string}
        </text>
      </g>
    </svg>
  );
};

SVGDonut.propTypes = {
  stat: PropTypes.number,
  string: PropTypes.string
};

