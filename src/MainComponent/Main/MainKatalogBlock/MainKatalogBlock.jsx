import './MainKatalogBlock.scss';
import img from '../../../img/Rectangle 6.png';

export const MainKatalog = () => {
	return (
		<div className='MainKatalog'>
			<div className='MainKatalog_information'>
				<div className='MainKatalog_title'>Ми знаємо, що сподобається вашим “великим” друзям!</div>
				<div className='MainKatalog_text'>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</div>
				<div className='MainKatalog_button'>
					<button>До каталогу</button>
				</div>
			</div>
			<div className='MainKatalog_img'>
				<img src={img} />
			</div>
		</div>
	);
};
