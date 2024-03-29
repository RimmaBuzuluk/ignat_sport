import { MainActionBlock } from '../MainActionBlock/MainActionBlock';
import { MainClientBlock } from '../MainClientBlock/MainClientBlock';
import { MainImgBlock } from '../MainImgBlock/MainImgBlock';
import { MainKatalog } from '../MainKatalogBlock/MainKatalogBlock';
import { MainProductBlock } from '../MainProductBlock/MainProductBlock';

export const Main = () => {
	return (
		<div className='Main'>
			<MainImgBlock />
			<MainKatalog />
			<MainProductBlock />
			<MainActionBlock />
			<MainClientBlock />
		</div>
	);
};
