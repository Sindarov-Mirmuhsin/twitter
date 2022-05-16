import Pin from '../Components/Pin/Pin';
import ProfileSection from '../Components/Profile/ProfileSection';
import Photos from '../Assets/Images/rasmla.png';
import Input from '../Components/Input/Input';
import Trends from '../Components/Trends/Trends';
import Follow from '../Components/Follow/Follow';

const Profile = () => {
	return (
		<div className='profiles'>
			<div>
				<ProfileSection />
				<Pin />
			</div>
			<div>
				<Input />
				<img className='searchImg' src={Photos} alt='Photo' />
				<Follow />
				<a className='trends__link' href='#link'>
					Show more
				</a>
				<Trends />
			</div>
		</div>
	);
};

export default Profile;
