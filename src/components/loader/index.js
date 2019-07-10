import React from 'react';

import '../../scss/loader.scss';

function Loader() {
  return (
    <div className="loader">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ellipsis">
        <circle cx="84" cy="50" r="0" fill="#c7c7c7">
          <animate attributeName="r" values="5;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
          <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
        </circle>
        <circle cx="16" cy="50" r="3.39372" fill="#8e8e8e">
          <animate attributeName="r" values="0;5;5;5;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
          <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="-0.5s"></animate>
        </circle>
        <circle cx="84" cy="50" r="1.60628" fill="#3d3d3d">
          <animate attributeName="r" values="0;5;5;5;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
          <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="-0.25s"></animate>
        </circle>
        <circle cx="73.0773" cy="50" r="5" fill="#ef4059">
          <animate attributeName="r" values="0;5;5;5;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
          <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
        </circle>
        <circle cx="39.0773" cy="50" r="5" fill="#c7c7c7">
          <animate attributeName="r" values="0;0;5;5;5" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
          <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="1s" repeatCount="indefinite" begin="0s"></animate>
        </circle>
      </svg>
    </div>
  );
}

export default Loader;
