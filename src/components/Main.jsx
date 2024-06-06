import { RiArrowRightWideLine } from 'react-icons/ri';
import ArtBoard from './ArtBoard';

export default function Main() {
	return (
		<>
			<div className="info-bar">
				<section className="breadcrumbs">
					<a href="#" className="breadcrums__link">
						Facebook posts
					</a>
					<RiArrowRightWideLine className="breadcrumbs__icon" />
					<span className="breadcrumbs__name">Happy hour-friday</span>
				</section>
				<button className="button">Publish</button>
			</div>
			<ArtBoard />
		</>
	);
}
