import Designsta from '../../../Assets/Images/designsta.png';
import Info from '../../../Assets/Images/info.png';
import CommentIcon from '../../../Assets/Images/comment.png';
import Refresh from '../../../Assets/Images/paftor.png';
import Like from '../../../Assets/Images/like.png';
import Share from '../../../Assets/Images/padelitsa.png';
import Vectr from '../../../Assets/Images/vectr.png';
import SbImg from '../../../Assets/Images/cbimage.png';
import SpImg from '../../../Assets/Images/cpimage.png';
import Shashlik from '../../../Assets/Images/shashlik.png';
import './comments.css';

const Comment = () => {
	return (
		<div className='comment'>
			<div className='comment__hero'>
				<div className='comment__inner'>
					<img className='comment__img' src={Designsta} alt='designsta' />
					<div className='designsta'>
						<strong className='designsta__title'>Designsta</strong>
						<a className='designsta__link' href='#link'>
							@inner · 25m
						</a>
					</div>
					<span className='comment__info'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='comment__text'>
					Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
					zerikmadinglarmi?
				</p>
				<div className='icons'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='Comment Icon' />
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

			<div className='comment__hero'>
				<div className='comment__inner'>
					<img className='comment__img' src={SbImg} alt='dbimg' />
					<div className='designsta'>
						<strong className='designsta__title'>cloutexhibition</strong>
						<a className='designsta__link' href='#link'>
							@RajLahoti · 22m
						</a>
					</div>
					<span className='comment__info--left'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='comment__texts'>
					YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
					Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
					ko’rib hursand bo’ladi odam.
				</p>
				<div className='icons'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='Comment Icon' />
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

			<div className='comment__hero'>
				<div className='comment__inner'>
					<img className='comment__img' src={SpImg} alt='dpimg' />
					<div className='designsta'>
						<strong className='designsta__title'>CreativePhoto</strong>
						<a className='designsta__link' href='#link'>
							@cloutexhibition · 1h
						</a>
					</div>
					<span className='comment__info--right'>
						<img src={Info} alt='Info' />
					</span>
				</div>
				<p className='comment__text comment__text--info'>Обетда..... </p>
				<p className='comment__text comment__text--title'>Кечиринглар</p>
				<img className='commet__img' src={Shashlik} alt='Shashlik' />
				<div className='icons'>
					<span className='icons__inner'>
						<img src={CommentIcon} alt='Comment Icon' />
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

export default Comment;
