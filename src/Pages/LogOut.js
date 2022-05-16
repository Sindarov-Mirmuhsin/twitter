import React from 'react';
import { Context } from '../Context/TokenContext';

const LogOut = () => {

  const {setToken} = React.useContext(Context)

	return (
		<>
			<h1>Log out</h1>
      <button onClick={() => setToken(false)} >Log out</button>
		</>
	);
};

export default LogOut;
