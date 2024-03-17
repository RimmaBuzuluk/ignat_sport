import './MainActionBlock.scss';

export const MainActionBlock = item => {
	return (
		<div className='MainActionBlock'>
			<div className='MainActionBlock_container'>
				<div className='MainActionBlock_title'>Спіймай всі акції!</div>
				<div className='MainActionBlock_text'>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</div>
				<div className='MainActionBlock_input'>
					<div className='MainActionBlock_enter'>
						<input type='text' placeholder='введіть' />
						<button>Підписатись</button>
					</div>
				</div>
			</div>
		</div>
	);
};
