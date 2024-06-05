import Header from './components/Header';
import Main from './components/Main';
import Panel from './components/Panel';
import SideBar from './components/SideBar';

export default function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__container">
				<div className="sidebar">
					<SideBar />
				</div>
				<section className="panel">
					<Panel />
				</section>
				<main className="main">
					<Main />
				</main>
			</div>
		</div>
	);
}
