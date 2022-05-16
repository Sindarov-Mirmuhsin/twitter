import React from 'react';
import { Context } from '../../Context/TokenContext';
import Logo from '../../Assets/Images/logo.png';
import "./login.css"

const Login = () => {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setToken({
			username: evt.target.elements.username.value,
			password: evt.target.elements.password.value,
		});
	};

	return (
		<div className='login-page'>
			<img className='login-page__img' src={Logo} alt='site logo' />
			<h1 className='login-page__title'>Log in to Twitter</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						className='login-page__input'
						type='text'
						name='username'
						placeholder='Phone number, email address'
						required
					/>
				</div>
				<div>
					<input
						className='login-page__input'
						type='password'
						name='password'
						placeholder='Password'
						required
					/>
				</div>
				<button className='login-page__btn' type='submit'>
					Log In
				</button>
			</form>
			<div className='login-page__box'>
				<a className='login-page__link' href='#'>
					Forgot password?
				</a>
				<a className='login-page__link' href='#'>
					Sign up to Twitter
				</a>
			</div>
		</div>
	);
};

export default Login;
