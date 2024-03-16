import arr1 from '../.././imgIcon/Arrow 2.png';
import arr2 from '../.././imgIcon/Arrow 1.png';
import './BlocksHeader.scss';

export const BlocksHeader = ({ title }) => {
	return (
		<div className='BlocksHeader'>
			<div className='BlocksHeader_title'>{title}</div>
			<div className='BlocksHeader_page'>
				<div className='BlocksHeader_number'>01 / 03</div>
				<div className='BlocksHeader_arrows'>
					<div className='BlocksHeader_arrow'>
						<img src={arr1} />
					</div>
					<div className='BlocksHeader_arrow'>
						<img src={arr2} />
					</div>
				</div>
			</div>
		</div>
	);
};
