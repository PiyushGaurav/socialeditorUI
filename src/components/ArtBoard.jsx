import { FaObjectGroup } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaCropAlt } from 'react-icons/fa';

export default function ArtBoard() {
	return (
		<div className="artboard">
			<section className="canvas">
				<img
					className="canvas__bg-img"
					src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=2134&q=100"
					alt="Background image"
				/>

				<img
					className="canvas__fg-img"
					src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=1453&q=85"
					alt="Foreground image"
				/>
				<div className="canvas__circle"></div>
				<div className="canvas__circle"></div>
				<div className="canvas__circle"></div>
				<div className="canvas__circle"></div>
			</section>
			<section className="tools">
				<button className="tool tool__active">
					<FaCropAlt className="tool__icon" />
				</button>
				<button className="tool">
					<FaObjectGroup className="tool__icon" />
				</button>
				<button className="tool">
					<FaPen className="tool__icon" />
				</button>
				<button className="tool">
					<FaTrash className="tool__icon" />
				</button>
			</section>
		</div>
	);
}
