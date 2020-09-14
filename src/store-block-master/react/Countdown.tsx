import React from 'react'

import App from '.../src/App';

interface ApresentationProps {}



const Countdown: StorefrontFunctionComponent<ApresentationProps> = ({}) => {
  
  return (
    <div>
      <App />
    </div>
  );
};

Countdown.schema = {
  title: "editor.apresentation.title",
  description: "editor.apresentation.description",
  type: "object",
  properties: {},
};

export default Countdown;


