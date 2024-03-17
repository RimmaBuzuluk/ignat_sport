import './ItemProduct.scss';
import { useState } from 'react';
import likeItem from '../.././imgIcon/heart.png';

export const ImportProduct = item => {
	const [likeStatus, setLikeStatus] = useState(false);

	const likeButton = () => {
		const status = likeStatus;
		setLikeStatus(!status);
	};
	return (
		<div className='ItemProduct'>
			<div className='ItemProduct_imgBlock'>
				<img className='ItemProduct_img' src={item.item.img} />
				<button onClick={likeButton} className={`ItemProduct_itemLike ${likeStatus ? 'liked' : ''}`}>
					<img src={likeItem} />
				</button>
			</div>
			<div className='ItemProduct_information'>
				<div className='ItemProduct_title'>{item.item.productName}</div>
				<div className='ItemProduct_type'>{item.item.type}</div>
				<div className='ItemProduct_desctiption'>{item.item.description}</div>
				<div className='ItemProduct_price'>{item.item.price}.</div>
			</div>
		</div>
	);
};
