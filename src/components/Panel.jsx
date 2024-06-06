import { RiArrowLeftDoubleFill } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa6';

export default function Panel() {
	return (
		<>
			<div className="panel__top">
				<h1 className="first-heading">Images</h1>
				<RiArrowLeftDoubleFill className="panel__collapse-icon" />
			</div>
			<div className="panel__images">
				<img
					className="panel__img"
					src="https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=280&q=100"
					alt="Uploaded image"
				/>

				<img
					className="panel__img"
					src="https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=280&q=100"
					alt="Uploaded image"
				/>

				<img
					className="panel__img"
					src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
					alt="Uploaded image"
				/>

				<img
					className="panel__img"
					src="https://images.unsplash.com/photo-1615749190340-34c7c3b16784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
					alt="Uploaded image"
				/>

				<img
					className="panel__img"
					src="https://images.unsplash.com/photo-1615707547992-93435f1e7f13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
					alt="Uploaded image"
				/>
				<button className="panel__btn">
					<FaPlus className="panel__upload-icon" />
				</button>
			</div>
		</>
	);
}
