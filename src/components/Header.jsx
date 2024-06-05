import { FaCrown, FaBell } from 'react-icons/fa';

export default function Header() {
	return (
		<header className="header">
			<img className="logo" src="https://bytegrad.com/course-assets/css/1/logo.svg" alt="Logo" />
			<button className="dd-toggle">File</button>
			<button className="dd-toggle">View</button>
			<button className="dd-toggle">New</button>
			<button className="dd-toggle">
				<FaCrown className="dd-toggle__icon" />
			</button>
			<button className="dd-toggle">
				<FaBell />
			</button>
			<button className="dd-toggle">
				<img
					className="dd-toggle__img"
					src="https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=60&q=100"
					alt="User photo"
				/>
				<span className="dd-toggle__text">Piyush</span>
			</button>
		</header>
	);
}
