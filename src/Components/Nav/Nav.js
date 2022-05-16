import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png';
import HomeImg from '../../Assets/Images/home.png';
import Hashtag from '../../Assets/Images/hashtag.png';
import Follow from '../../Assets/Images/follow.png';
import Email from '../../Assets/Images/email.png';
import Bookmark from '../../Assets/Images/bookmark.png';
import Lists from '../../Assets/Images/vector2.png';
import Profile from '../../Assets/Images/profile.png';
import More from '../../Assets/Images/more.png';
import './nav.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<img className='login__img' src={Logo} alt='site logo' />
			<div className='nav__list'>
				<NavLink className='nav__item link' to='/'>
					<img src={HomeImg} alt='home image' />
					<a className={`link`}>Home</a>
				</NavLink>
				<NavLink className='nav__item link' to='/explore'>
					<img src={Hashtag} alt='hashtag image' />
					<a className={`link`}>Explore</a>
				</NavLink>
				<NavLink className='nav__item link' to='/notifications'>
					<img src={Follow} alt='follow' />
					<a className={`link`}>Notifications</a>
				</NavLink>
				<NavLink className='nav__item link' to='/messages'>
					<img src={Email} alt='Email' />
					<a className={`link`}>Messages</a>
				</NavLink>
				<NavLink className='nav__item link' to='/bookmarks'>
					<img src={Bookmark} alt='Bookmark' />
					<a className={`link`}>Bookmarks</a>
				</NavLink>
				<NavLink className='nav__item link' to='/lists'>
					<img src={Lists} alt='Lists' />
					<a className={`link`}>Lists</a>
				</NavLink>
				<NavLink className='nav__item link' to='/profile'>
					<img src={Profile} alt='profile' />
					<a className={`link`}>Profile</a>
				</NavLink>
				<NavLink className='nav__item link' to='/more'>
					<img src={More} alt='More' />
					<a className={`link`}>More</a>
				</NavLink>
				<NavLink className='nav__item link' to='/tweet'>
					<a className={`link__submit`}>Tweet</a>
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
