import Back from '../../Assets/Images/back.png';
import BgImage from '../../Assets/Images/bgimage.png';
import Bobur from '../../Assets/Images/bobr.png';
import Location from '../../Assets/Images/location.png';
import Group from '../../Assets/Images/group.png';
import Data from '../../Assets/Images/data.png';
import Calendar from '../../Assets/Images/calendar.png';

import './profile.css';

const ProfileSection = () => {
	return (
		<div className='profile'>
			<div className='profile__inner'>
				<img className='profile__img' src={Back} alt='Back' />
				<div className='profile__hero'>
					<h3 className='profile__title'>Bobur</h3>
					<strong className='profile__num'>1,070 Tweets</strong>
				</div>
			</div>
			<div className='profile__person'>
				<img className='profile__bgimg' src={BgImage} alt='BgImage' />
				<img className='profile__user' src={Bobur} alt='Bobur' />
				<button className='profile__btn' type='button'>
					Edit profile
				</button>
				<div className='profile__box'>
					<h3 className='profile__name'>Bobur</h3>
					<a className='profile__linki' href='#link'>
						@bobur_mavlonov
					</a>
					<span className='profile__span'>
						<strong className='profile__str'>UX&UI designer at</strong>
						<a className='profile__links' href='#link'>
							@abutechuz
						</a>
					</span>
				</div>
				<ol className='profile__list'>
					<li className='profile__item'>
						<img className='profile__img' src={Location} alt='Location' />
						<a className='profile__link' href='#link'>
							Mashag’daman
						</a>
					</li>
					<li className='profile__item'>
						<img className='profile__img' src={Group} alt='Group' />
						<a className='profile__link profile__link--left' href='#link'>
							t.me/boburjon_mavlonov
						</a>
					</li>
					<li className='profile__item'>
						<img className='profile__img' src={Data} alt='Data' />
						<a className='profile__link' href='#link'>
							Born November 24, 2000
						</a>
					</li>
					<li className='profile__item'>
						<img className='profile__img' src={Calendar} alt='Calendar' />
						<a className='profile__link' href='#link'>
							Joined May 2020
						</a>
					</li>
				</ol>
				<ol className='following'>
					<li className='following__item'>
						<strong className='following__num'>67 </strong>
						<p className='following__text'>Following</p>
					</li>
					<li className='following__item'>
						<strong className='following__num'>47 </strong>
						<p className='following__text'>Followers</p>
					</li>
				</ol>
				<ol className='tweets'>
					<li className='tweets__item tweets__item--left'>
						<a className='tweets__links' href='#link'>
							Tweets
						</a>
					</li>
					<li className='tweets__item'>
						<a className='tweets__link' href='#link'>
							Tweets & replies
						</a>
					</li>
					<li className='tweets__item'>
						<a className='tweets__link' href='#link'>
							Media
						</a>
					</li>
					<li className='tweets__item'>
						<a className='tweets__link' href='#link'>
							Likes
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default ProfileSection;
