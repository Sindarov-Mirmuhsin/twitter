import React from 'react';
import Customize from '../../Assets/Images/customize.png';
import People from '../../Assets/Images/bobr.png';
import Photo from '../../Assets/Images/photo.png';
import Gif from '../../Assets/Images/gif.png';
import Icon from '../../Assets/Images/3.png';
import Smile from '../../Assets/Images/smile.png';
import Kalendar from '../../Assets/Images/kalendar.png';
import './home.css';
import Comment from '../../Components/Nav/Comment/Comment';
import Search from '../../Components/Search/Search';

const Home = () => {
	return (
		<section className='home'>
			<form autoComplete='off'>
				<div className='home__inner'>
					<p className='home__title'>Home</p>
					<img src={Customize} alt='Customize' />
				</div>
				<div className='people__inner'>
					<div className='people'>
						<img className='people__img' src={People} alt='people image' />
						<input
							className='people__input'
							type='text'
							placeholder='What’s happening'
						/>
					</div>
					<div className='people-info'>
						<img className='people-info__img' src={Photo} alt='icon' />
						<img className='people-info__img' src={Gif} alt='icon' />
						<img className='people-info__img' src={Icon} alt='icon' />
						<img className='people-info__img' src={Smile} alt='icon' />
						<img className='people-info__img' src={Kalendar} alt='icon' />
					</div>
					<button className='people__btn' type='submit'>
						Tweet
					</button>
				</div>
				<Comment />
			</form>
			<Search />
		</section>
	);
};

export default Home;
