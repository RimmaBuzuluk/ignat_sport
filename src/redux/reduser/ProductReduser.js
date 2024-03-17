import img2 from '../../img/Rectangle 4 (1).png';
import img3 from '../../img/Rectangle 4 (2).png';
import img1 from '../../img/Rectangle 4.png';

const initialState = {
	products: [
		{
			id: 1,
			img: img1,
			productName: 'Термобілизна для бодібілдерів',
			type: 'Для чоловіків',
			description: '2 кольори',
			price: '4000px',
		},
		{
			id: 2,
			img: img2,
			productName: 'Майка для бодібілдерів',
			type: 'Для жінок',
			description: '6 кольорів',
			price: '1100px',
		},
		{
			id: 3,
			img: img3,
			productName: 'Ланцюжок для бодібілдерів',
			type: 'Аксесуари',
			description: '30 кг.',
			price: '2000px',
		},
	],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;
