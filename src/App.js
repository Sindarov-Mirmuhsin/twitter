import React from 'react';
import AuthenticationApp from './AuthenticationApp';
import UnAuthenticationApp from './UnAuthenticationApp';
import {Context} from "./Context/TokenContext"
function App() {

  const {token} = React.useContext(Context)

	if(token) {
    return <AuthenticationApp/>
  }else {
    return <UnAuthenticationApp/>
  }
}

export default App;
