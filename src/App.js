import './App.scss';
import { Footer } from './MainComponent/Footer/Footer';
import { Header } from './MainComponent/Header/Header/Header';
import { Main } from './MainComponent/Main/Main/Main';

function App() {
	return (
		<div className='App'>
			<Header />

			<Main />

			<Footer />
		</div>
	);
}

export default App;
