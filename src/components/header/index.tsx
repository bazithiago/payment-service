import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import HeaderStyles from './styles';

const Header = () => {
	return (
		<HeaderStyles>
			<div>
				<FiCheckSquare size={28} color={'var(--primary-color)'}/>
			</div>
			<FiBell size={24} color={'var(--gray-two)'}/>
		</HeaderStyles>
	);
};

export default Header;
