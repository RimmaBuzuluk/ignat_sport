import { useState, useEffect } from 'react';
import './ItemComment.scss';
import starBlack from '../../imgIcon/IconStar2.png';
import starfrom from '../../imgIcon/IconStar.png';

export const ItemComment = item => {
	const [star, setStar] = useState(0);
	const [unStar, setUnStar] = useState(5);

	useEffect(() => {
		setStar(item.item.star || 0);

		setUnStar(5 - star);
	}, [item.item.star, unStar, star]);

	// console.log('star', star);
	// console.log('UN', unStar);

	const starsArray = Array.from({ length: star }, (_, index) => <img key={index} src={starBlack} alt='Star' />);
	const starsUnArray = Array.from({ length: unStar }, (_, index) => <img key={index} src={starfrom} alt='Star' />);
	return (
		<div className='ItemComment'>
			<div className='ItemComment_header'>
				<div className='ItemComment_img'>
					<img src={item.item.img} alt='User avatar' />
				</div>
				<div className='ItemComment_mainInform'>
					<div className='ItemComment_stars'>
						{starsArray}
						{starsUnArray}
					</div>
					<div className='ItemComment_name'>{item.item.name}</div>
				</div>
			</div>
			<div className='ItemComment_text'>{item.item.text}</div>
		</div>
	);
};
