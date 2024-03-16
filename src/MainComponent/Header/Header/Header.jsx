import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { MainHeader } from '../MainHeader/MainHeader';

export const Header = () => {
	return (
		<div className='Header'>
			<MainHeader />
			<HeaderMenu />
		</div>
	);
};
