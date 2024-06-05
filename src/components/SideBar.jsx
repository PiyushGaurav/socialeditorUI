import { FaLayerGroup, FaFont, FaShapes } from 'react-icons/fa';
import { IoImages } from 'react-icons/io5';

export default function SideBar() {
	return (
		<>
			<section className="menu">
				<button className="menu__button">
					<FaLayerGroup className="menu__icon" />
					<span className="menu__text">Template</span>
				</button>
				<button className="menu__button menu__button--active">
					<IoImages className="menu__icon" />
					<span className="menu__text">Images</span>
				</button>
				<button className="menu__button">
					<FaFont className="menu__icon" />
					<span className="menu__text">Text/Fonts</span>
				</button>
				<button className="menu__button">
					<FaShapes className="menu__icon" />
					<span className="menu__text">Shapes</span>
				</button>
			</section>
			<footer className="footer">
				<small className="copyright">&copy; 2050 SocialEditor. All rights reserved</small>
			</footer>
		</>
	);
}
