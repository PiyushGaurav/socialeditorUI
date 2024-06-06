import { useState } from 'react';
import { FaLayerGroup, FaFont, FaShapes } from 'react-icons/fa';
import { IoImages } from 'react-icons/io5';

export default function SideBar() {
	const [selected, setSelected] = useState(2);
	return (
		<>
			<section className="menu">
				<button
					className={`menu__button ${selected == 0 ? 'menu__button--active' : ''}`}
					onClick={() => setSelected(0)}
				>
					<FaLayerGroup className="menu__icon" />
					<span className="menu__text">Template</span>
				</button>
				<button
					className={`menu__button ${selected == 1 ? 'menu__button--active' : ''}`}
					onClick={() => setSelected(1)}
				>
					<IoImages className="menu__icon" />
					<span className="menu__text">Images</span>
				</button>
				<button
					className={`menu__button ${selected == 2 ? 'menu__button--active' : ''}`}
					onClick={() => setSelected(2)}
				>
					<FaFont className="menu__icon" />
					<span className="menu__text">Text/Fonts</span>
				</button>
				<button
					className={`menu__button ${selected == 3 ? 'menu__button--active' : ''}`}
					onClick={() => setSelected(3)}
				>
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
