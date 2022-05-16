import Bobur from '../../Assets/Images/bobr.png';
import Info from '../../Assets/Images/info.png';
import CommentIcon from '../../Assets/Images/comment.png';
import Refresh from '../../Assets/Images/paftor.png';
import Like from '../../Assets/Images/like.png';
import Share from '../../Assets/Images/padelitsa.png';
import Vectr from '../../Assets/Images/vectr.png';
import Bobr from '../../Assets/Images/bobur.png';
import './pin.css';

const Pin = () => {
	return (
		<div>
			<div className='pin__hero'>
				<div className='pin__inner'>
					<img className='pin__img' src={Bobur} alt='dbimg' />
					<div className='designsta'>
						<strong className='designsta__title'>Bobur</strong>
						<a className='designsta__link' href='#link'>
							@bobur_mavlonov · Apr 1
						</a>
					</div>
					<span className='pin__info--lt'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='pin__texts'>
					4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
					uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
					jismoniy holatni normallashtirishni reja qildim
				</p>
				<div className='pin'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='pin Icon' />
						<strong className='icons__number'>10</strong>
					</span>
					<span className='icons__inner'>
						<img src={Refresh} alt='Refresh' />
						<strong className='icons__number'>1</strong>
					</span>
					<span className='icons__inner'>
						<img src={Like} alt='Like' />
						<strong className='icons__number'>8</strong>
					</span>
					<span className='icons__inner'>
						<img src={Share} alt='Share' />
					</span>
					<span className='icons__inner'>
						<img src={Vectr} alt='Vectr' />
					</span>
				</div>
			</div>

			<div className='pin__hero'>
				<div className='pin__inner'>
					<img className='pin__img' src={Bobur} alt='dbimg' />
					<div className='designsta'>
						<strong className='designsta__title'>Bobur</strong>
						<a className='designsta__link' href='#link'>
							@bobur_mavlonov · Apr 1
						</a>
					</div>
					<span className='pin__info--lt'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='pin__texts--middle'>
					Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga
					qarab ham o'tirmaymiz. Bitta biznes trener nito gapirib qo'ysa, hamma
					biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap
					faqat biznes trenerlar haqida emas.
				</p>
				<div className='pin'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='pin Icon' />
					</span>
					<span className='icons__inner'>
						<img src={Refresh} alt='Refresh' />
						<strong className='icons__number'>5</strong>
					</span>
					<span className='icons__inner'>
						<img src={Like} alt='Like' />
						<strong className='icons__number'>9</strong>
					</span>
					<span className='icons__inner'>
						<img src={Share} alt='Share' />
					</span>
					<span className='icons__inner'>
						<img src={Vectr} alt='Vectr' />
					</span>
				</div>
			</div>

			<div className='pin__hero'>
				<div className='pin__inners'>
					<img className='pin__img' src={Bobur} alt='dbimg' />
					<div className='designsta'>
						<strong className='designsta__title'>Bobur</strong>
						<a className='designsta__link' href='#link'>
							@bobur_mavlonov · Apr 1
						</a>
					</div>
					<span className='pin__info--lt'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='pin__texts--btm'>A bo'pti maskamasman</p>
				<img src={Bobr} alt='person' />
				<div className='pin'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='pin Icon' />
						<strong className='icons__number'>10</strong>
					</span>
					<span className='icons__inner'>
						<img src={Refresh} alt='Refresh' />
						<strong className='icons__number'>1</strong>
					</span>
					<span className='icons__inner'>
						<img src={Like} alt='Like' />
						<strong className='icons__number'>8</strong>
					</span>
					<span className='icons__inner'>
						<img src={Share} alt='Share' />
					</span>
					<span className='icons__inner'>
						<img src={Vectr} alt='Vectr' />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Pin;
