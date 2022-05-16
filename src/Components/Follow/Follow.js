import Mushtariy from '../../Assets/Images/mushtariy.png';
import Shuxrat from '../../Assets/Images/shuhrat.png';

import './follow.css';

const Follow = () => {
	return (
		<div className='follow'>
			<div className='follow__hero'>
				<h2 className='follow__title'>You might like</h2>
				<div className='follow__inner'>
					<img className='follow__img' src={Mushtariy} alt='Mushtariy' />
					<span className='follow__box'>
						<p className='follow__text'>Mushtariy</p>
						<a className='follow__link' href='#link'>
							@Mushtar565266
						</a>
					</span>
					<button className='follow__btn'>Follow</button>
				</div>
			</div>

			<div className='follow__hero'>
				<div className='follow__inner'>
					<img className='follow__img' src={Shuxrat} alt='Mushtariy' />
					<span className='follow__box'>
						<p className='follow__text'>Mushtariy</p>
						<a className='follow__link' href='#link'>
							@mrshukhrat
						</a>
					</span>
					<button className='follow__btn follow__btn--bottom'>Follow</button>
				</div>
			</div>
		</div>
	);
};

export default Follow;
