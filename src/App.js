import React from "react";
import Amplify from 'aws-amplify'
import {AmplifyChatbot} from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


function App() {

  return (
    <>
      <AmplifyChatbot
        botName="Ysapilot_dev"
        botTitle="YSA"
      />
    </>
  );
}

export default App;