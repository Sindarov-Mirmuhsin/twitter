import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Explore from './Pages/Explore';
import Nav from './Components/Nav/Nav';
import LogOut from './Pages/LogOut';
import Notifications from './Pages/Notifications';
import Messages from './Pages/Messages';
import Bookmarks from './Pages/Bookmarks';
import Lists from './Pages/Lists';
import Profile from './Pages/Profile';
import More from './Pages/More';
import Tweet from './Pages/Tweet';
function AuthenticationApp() {
	return (
		<div className='twit'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/notifications' element={<Notifications />} />
				<Route path='/messages' element={<Messages />} />
				<Route path='/bookmarks' element={<Bookmarks />} />
				<Route path='/lists' element={<Lists />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/more' element={<More />} />
				<Route path='/logout' element={<LogOut />} />
				<Route path='/tweet' element={<Tweet />} />
			</Routes>
		</div>
	);
}

export default AuthenticationApp;
