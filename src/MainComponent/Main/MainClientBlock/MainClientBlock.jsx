import { BlocksHeader } from '../../../component/BlocksHeader/BlocksHeader';
import './MainClientBlock.scss';
import img from '../../../img/Mask.png';
import { ItemComment } from '../../../component/ItemComment/ItemComment';

export const MainClientBlock = () => {
	const title = 'Відгуги наших клієнтів';
	const comment = [
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
	];
	return (
		<div className='MainClientBlock'>
			<BlocksHeader title={title} />
			<div className='MainClientBlock_comment'>
				{comment.map(item => (
					<ItemComment item={item} />
				))}
			</div>
		</div>
	);
};
