import Settings from '../../Assets/Images/settings.png';

import './trends.css';

const Trends = () => {
	return (
		<div className='trends'>
			<div className='trends__hero'>
				<h2 className='trends__title'>Trends for you</h2>
				<img src={Settings} alt='Settings' />
			</div>
			<div className='trends__inner'>
				<p className='trends__text'>Trending in Germany</p>
				<strong className='trends__info'>Revolution</strong>
				<p className='trends__text'>Revolution</p>
			</div>
			<div className='trends__inner'>
				<p className='trends__text'>Trending in Germany</p>
				<strong className='trends__info'>Revolution</strong>
				<p className='trends__text'>Revolution</p>
			</div>
			<div className='trends__inner'>
				<p className='trends__text'>Trending in Germany</p>
				<strong className='trends__info'>Revolution</strong>
				<p className='trends__text'>Revolution</p>
			</div>
			<a className='trends__link' href='#link'>Show more</a>
		</div>
	);
};

export default Trends;
