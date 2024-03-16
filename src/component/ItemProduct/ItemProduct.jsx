import './ItemProduct.scss';

export const ImportProduct = item => {
	return (
		<div className='ItemProduct'>
			<div className='ItemProduct_img'>
				<img src={item.item.img} />
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
