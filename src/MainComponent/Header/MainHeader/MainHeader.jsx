import './MainHeader.scss';

export const MainHeader = () => {
	return (
		<div className='MainHeader_block'>
			<div className='MainHeader'>
				<div className='MainHeader_contact'>
					<div className='MainHeader_number'>098 900 09 09</div>
					<div className='MainHeader_help'>Допомога</div>
				</div>
				<div className='MainHeader_auth'>
					<div className='MainHeader_authorithation'>Увійти</div>
					<div>/</div>
					<div className='MainHeader_register'>Зареєструватися</div>
				</div>
			</div>
		</div>
	);
};
