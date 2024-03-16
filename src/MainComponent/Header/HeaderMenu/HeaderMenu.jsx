import basketIcon from '../../../imgIcon/bag.png';
import serchIcon from '../../../imgIcon/Vector.png';
import likeIcon from '../../../imgIcon/heart.png';
import './HeaderMenu.scss';

export const HeaderMenu = () => {
	return (
		<div className='HeaderMenu_block'>
			<div className='HeaderMenu'>
				<div className='HeaderMenu_logo'>IGNAT</div>
				<div className='HeaderMenu_items'>
					<div className='HeaderMenu_item'>новинки</div>
					<div className='HeaderMenu_item'>чоловіки</div>
					<div className='HeaderMenu_item'>жінки</div>
					<div className='HeaderMenu_item'>аксесуари</div>
					<div className='HeaderMenu_item'>акції</div>
				</div>
				<div className='HeaderMenu_iconMenu'>
					<div className='HeaderMenu_iconMenuItem HeaderMenu_input'>
						<input type='text' />
					</div>
					<div className='HeaderMenu_iconMenuItem HeaderMenu_likeIcon'>
						<img src={likeIcon} />
					</div>
					<div className='HeaderMenu_iconMenuItem HeaderMenu_basketIcon'>
						<img src={basketIcon} />
					</div>
				</div>
			</div>
		</div>
	);
};
