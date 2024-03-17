import { BlocksHeader } from '../../../component/BlocksHeader/BlocksHeader';
import './MainClientBlock.scss';
import { ItemComment } from '../../../component/ItemComment/ItemComment';
import { useSelector } from 'react-redux';

export const MainClientBlock = () => {
	const title = 'Відгуги наших клієнтів';
	const comment = useSelector(state => state.comment.comment);

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
