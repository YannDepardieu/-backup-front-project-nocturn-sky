import React from 'react';
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai';

import './Loading.scss';

const Loading = () => (
  <section className="loading">
    <svg className="loading-title" viewBox="0 0 100 20">
      <defs>
        <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
          <path
            id="wavePath"
            d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
            mask="url(#mask)"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="1.5s"
              type="translate"
              from="0,0"
              to="40,0"
              repeatCount="indefinite"
            />
          </path>
        </pattern>
      </defs>
      <text className="text" textAnchor="middle" x="50" y="15" fill="white" fillOpacity="0.25">Chargement</text>
      <text textAnchor="middle" x="50" y="15" fill="url(#wave)" fillOpacity="1">Chargement</text>
    </svg>

    <div className="loading-loader">
      <LoadingIcon />
      <LoadingIcon />
      <LoadingIcon />
    </div>
  </section>
);

export default Loading;