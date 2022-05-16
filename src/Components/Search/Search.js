
import Follow from '../Follow/Follow';
import Input from '../Input/Input';
import Trends from '../Trends/Trends';
import './search.css';

const Search = () => {
	return (
		<div className='search'>
			<Input/>
			<Trends />
			<Follow />
			<a className='trends__link' href='#link'>
				Show more
			</a>
			<div className='search__box'>
				<a className='search__link' href='#link'>
					Terms of Service
				</a>
				<a className='search__link' href='#link'>
					Privacy Policy
				</a>
				<a className='search__link' href='#link'>
					Cookie Policy
				</a>
				<a className='search__links' href='#link'>
					Imprint
				</a>
				<a className='search__link' href='#link'>
					Ads Info
				</a>
				<a className='search__link' href='#link'>
					More ···
				</a>
				<a className='search__link' href='#link'>
					© 2021 Twitter, Inc.
				</a>
			</div>
		</div>
	);
};

export default Search;
