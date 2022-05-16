import "./input.css"
import SearchImg from '../../Assets/Images/search.png';

const Input = () => {

  
  return (
		<div className='search__inner'>
			<img src={SearchImg} alt='Search' />
			<input
				className='search__input'
				type='search'
				placeholder='Search Twitter'
			/>
		</div>
	);
}

export default Input;