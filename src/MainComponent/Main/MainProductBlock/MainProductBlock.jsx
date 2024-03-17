import { useSelector } from 'react-redux';
import { BlocksHeader } from '../../../component/BlocksHeader/BlocksHeader';
import { ImportProduct } from '../../../component/ItemProduct/ItemProduct';
import './MainProductBlock.scss';

export const MainProductBlock = () => {
	const product = useSelector(state => state.product.products);

	const title = 'Найгарячіші товари';
	return (
		<div className='MainProductBlock'>
			<BlocksHeader title={title} />
			<div className='MainProductBlock_items'>
				{product.map(item => (
					<ImportProduct item={item} />
				))}
			</div>
		</div>
	);
};
