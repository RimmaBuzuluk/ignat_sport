import './FooterMenu.scss';

export const FooterMenu = () => {
	return (
		<div className='FooterMenu'>
			<div className='FooterMenu_block'>
				<div className='FooterMenu_list'>
					<div className='FooterMenu_title'>Контакт - центр</div>
					<div className='FooterMenu_items'>
						<div className='FooterMenu_item'>098 900 09 09 </div>
						<div className='FooterMenu_item'>Пн - Пт 09:00 - 21:00</div>
						<div className='FooterMenu_item'>Пн - Пт 09:00 - 21:00</div>
					</div>
				</div>
				<div className='FooterMenu_list'>
					<div className='FooterMenu_title'>Покупцям</div>
					<div className='FooterMenu_items'>
						<div className='FooterMenu_item'>Оплата і доставка</div>
						<div className='FooterMenu_item'>Повернення</div>
						<div className='FooterMenu_item'>Питання та відповіді</div>
					</div>
				</div>
				<div className='FooterMenu_list'>
					<div className='FooterMenu_title'>Особистий кабінет</div>
					<div className='FooterMenu_items'>
						<div className='FooterMenu_item'>Мої дані</div>
						<div className='FooterMenu_item'>Історія замовлень</div>
						<div className='FooterMenu_item'>Улюблені</div>
						<div className='FooterMenu_item'>Розсилки</div>
					</div>
				</div>
				<div className='FooterMenu_list'>
					<div className='FooterMenu_title'>Про компанію</div>
					<div className='FooterMenu_items'>
						<div className='FooterMenu_item'>Про нас</div>
						<div className='FooterMenu_item'>Новини</div>
						<div className='FooterMenu_item'>Стати партнером</div>
						<div className='FooterMenu_item'>Угода користувача</div>
					</div>
				</div>
			</div>
		</div>
	);
};
