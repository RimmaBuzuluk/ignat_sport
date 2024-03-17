import img from '../../img/Mask.png';

const initialState = {
	comment: [
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
		{ name: 'Жора Ремінгтон', img: img, text: 'Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...', star: 4 },
	],
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_COMMENT':
			return {
				...state,
				comments: action.payload,
			};
		default:
			return state;
	}
};

export default commentReducer;
