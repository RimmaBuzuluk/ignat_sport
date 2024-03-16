import mainImg from '../../../img/Slider Image.png';
import './MainImgBlock.scss';
import leftArrow from '../../../imgIcon/Icon.png';
import rightArrow from '../../../imgIcon/Arrow Right.png';

export const MainImgBlock = () => {
	return (
		<div className='MainImg'>
			<div className='MainImg_Img'>
				<img src={mainImg} />
			</div>
			<div className='MainImg_information'>
				<div className='MainImg_arrow'>
					<img src={leftArrow} />
				</div>
				<div className='MainImg_text_left'>
					<div className='MainImg_text_title'>Швидше. Вище. Сильніше.</div>
					<div className='MainImg_text_titleNike'>Разом із Nike</div>
				</div>
				<div className='MainImg_text_right'>
					<div className='MainImg_text_sellers'>Знижки до 40%</div>
					<div className='MainImg_text_sellersText'>Залишився лише тиждень</div>
				</div>
				<div className='MainImg_arrow'>
					<img src={rightArrow} />
				</div>
			</div>
		</div>
	);
};
