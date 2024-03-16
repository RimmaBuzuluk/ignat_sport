import './App.scss';
import { Header } from './MainComponent/Header/Header/Header';
import { Main } from './MainComponent/Main/Main/Main';

function App() {
	return (
		<div className='App'>
			<Header />

			<main>
				<Main />
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default App;
